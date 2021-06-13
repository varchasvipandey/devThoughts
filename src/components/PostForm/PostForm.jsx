import { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import Container from "./PostForm.styles";

/* Components */
import { Field, Button } from "components/shared";

/* Config */
import { modules } from "./quill-config";

const PostForm = ({
  post = () => {},
  currentUser = null,
  formHandler = () => {},
  languages = [],
  selectedLanguage = "",
  postTitle = "",
  postBody = "",
  postId = "",
  updatePost = false,
}) => {
  // Validation state
  const [error, setError] = useState("");
  const [button, setButton] = useState({ label: "", cta: () => {} });

  const [inputBody, setInputBody] = useState("");
  const handleInput = (value) => {
    setInputBody(value);
  };

  // Form ref
  const titleRef = useRef();
  const languageRef = useRef();
  const authorRef = useRef();

  // Prefill Data
  useEffect(() => {
    languageRef.current.value = selectedLanguage;
    titleRef.current.value = postTitle;
    setInputBody(postBody);
  }, [selectedLanguage, postTitle, postBody]);

  const handleSubmit = useRef(() => {});
  handleSubmit.current = (postId = null) => {
    const data = {
      title: titleRef.current.value,
      language: languageRef.current.value?.toLowerCase(),
      // body: bodyRef.current.value,
      body: inputBody,
      author: authorRef.current.value,
    };

    // Get quill from DOM
    const quillBody = document.querySelector(".quill");

    // Highlight errors
    titleRef.current.style.borderColor = !data.title ? "red" : "transparent";
    languageRef.current.style.borderColor = !data.language
      ? "red"
      : "transparent";
    quillBody.style.borderColor = !data.body ? "red" : "transparent";
    authorRef.current.style.borderColor = !data.author ? "red" : "transparent";

    // Check for content existence
    if (!data.title || !data.language || !data.body || !data.author) {
      setError("All fields are mandatory");
      return;
    } else setError("");

    // Check if selected language is in options
    const selectedLanguage = languages?.filter(
      (language) => language.name === data.language
    );

    if (!selectedLanguage?.length >= 1) {
      setError("Language not available");
      languageRef.current.style.borderColor = "red";
      return;
    } else setError("");

    post(data, currentUser?.uid, postId);

    formHandler();
  };

  /* Handle button */
  useEffect(() => {
    if (updatePost)
      setButton({
        label: "Update thought",
        cta: () => handleSubmit.current(postId),
      });
    else
      setButton({
        label: "Publish thought",
        cta: () => handleSubmit.current(null),
      });
  }, [updatePost, handleSubmit, postId]);

  return (
    <Container>
      {/* Error message */}
      <div className="error">
        <p>{error}</p>
      </div>

      {/* Title */}
      <div className="field w-100">
        <Field
          flat
          type="text"
          ref={titleRef}
          placeholder="Thought title"
          style={{ fontSize: "1.6rem", padding: "1rem" }}
        />
      </div>

      {/* Language */}
      <div className="field w-100">
        <Field
          flat
          type="text"
          ref={languageRef}
          placeholder="Programming language"
          list="languages"
          style={{ fontSize: "1.6rem", padding: "1rem" }}
        />
        <datalist id="languages">
          {languages.map((language) => (
            <option key={language?.id} value={language?.name}>
              {language?.displayName}
            </option>
          ))}
        </datalist>
      </div>

      {/* Body */}
      <div className="quill-container">
        <ReactQuill
          value={inputBody}
          onChange={handleInput}
          modules={modules}
        />
      </div>

      {/* Author name and submit */}
      <div className="field flex">
        <div className="w-100">
          <Field
            flat
            type="text"
            ref={authorRef}
            placeholder="Author"
            value={currentUser?.displayName}
            style={{ fontSize: "1.6rem", padding: "1rem" }}
            disabled
          />
        </div>
        <div className="w-100">
          <Button
            label={button.label}
            cta={button.cta}
            disabled={!!currentUser?.id}
            style={{ fontSize: "1.6rem", padding: "1rem" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default PostForm;
