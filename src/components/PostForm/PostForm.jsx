import { useRef, useState, useEffect } from "react";
import Container from "./PostForm.styles";

/* Components */
import { Field, Button, TextArea } from "components/shared";

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

  // Form ref
  const titleRef = useRef();
  const languageRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();

  // Prefill Data
  useEffect(() => {
    languageRef.current.value = selectedLanguage;
    titleRef.current.value = postTitle;
    bodyRef.current.value = postBody;
  }, [selectedLanguage, postTitle, postBody]);

  const handleSubmit = useRef(() => {});
  handleSubmit.current = (postId) => {
    const data = {
      title: titleRef.current.value,
      language: languageRef.current.value?.toLowerCase(),
      body: bodyRef.current.value,
      author: authorRef.current.value,
    };

    console.log({ data });

    // Highlight errors
    titleRef.current.style.borderColor = !data.title ? "red" : "transparent";
    languageRef.current.style.borderColor = !data.language
      ? "red"
      : "transparent";
    bodyRef.current.style.borderColor = !data.body ? "red" : "transparent";
    authorRef.current.style.borderColor = !data.author ? "red" : "transparent";

    // Check for content existence
    if (!data.title || !data.language || !data.body || !data.author) {
      setError("All fields are mandatory");
      return;
    } else setError("");

    // Check for body word limit
    if (data.body.length > 2000) {
      setError("Thought body can't be more than 2000 characters");
      bodyRef.current.style.borderColor = "red";
      return;
    } else {
      setError("");
      bodyRef.current.style.borderColor = "transparent";
    }

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
    else setButton({ label: "Publish thought", cta: handleSubmit.current });
  }, [updatePost, handleSubmit, postId]);

  return (
    <Container>
      {/* Error message */}
      <div className="error">
        <p>{error}</p>
      </div>

      {/* Title */}
      <div className="field w-100">
        <Field flat type="text" ref={titleRef} placeholder="Thought title" />
      </div>

      {/* Language */}
      <div className="field w-100">
        <Field
          flat
          type="text"
          ref={languageRef}
          placeholder="Programming language"
          list="languages"
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
      <div className="field w-100">
        <TextArea
          flat
          placeholder="Content (max 2000 characters)"
          ref={bodyRef}
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
            disabled
          />
        </div>
        <div className="w-100">
          <Button
            label={button.label}
            cta={button.cta}
            disabled={!!currentUser?.id}
          />
        </div>
      </div>
    </Container>
  );
};

export default PostForm;
