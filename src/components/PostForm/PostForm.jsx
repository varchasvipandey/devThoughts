import { useRef, useState, useEffect } from "react";
import Container from "./PostForm.styles";

/* Components */
import { Field, Button, TextArea, EditorToolbar } from "components/shared";

const PostForm = ({
  post = () => {},
  currentUser = null,
  userRole = null,
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
  handleSubmit.current = (postId = null) => {
    let verified = true;

    const data = {
      title: titleRef.current.value,
      language: languageRef.current.value?.toLowerCase(),
      body: bodyRef.current.value,
      author: authorRef.current.value,
    };

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
    if (data.body.length > 4000) {
      setError("Thought body can't be more than 4000 characters");
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

    if (
      !selectedLanguage?.length >= 1 &&
      !userRole /* Ignore check - Authorized users can post in any language */
    ) {
      let errorString =
        "<p>Language not available.</p><p style='cursor: pointer; padding: 2rem; color: var(--color-text);'>Click / tap on <span style='color: var(--color-logo-1); font-weight: 600;'>Publish Thought</span> again to suggest this language & post anyway. (Post will undergo review & won't be available for some time)</p>";

      if (errorString === error) {
        verified = false;
        setError("");
      } else {
        setError(errorString);
        languageRef.current.style.borderColor = "red";
        return;
      }
    } else setError("");

    post(data, currentUser?.uid, postId, verified);

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
        <p dangerouslySetInnerHTML={{ __html: error }}></p>
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
      <div className="field w-100 with-controls">
        <EditorToolbar elem={bodyRef} pos />
        <TextArea
          flat
          placeholder="Content (max 2000 characters)"
          ref={bodyRef}
          style={{ fontSize: "1.6rem", padding: "4.2rem 1rem 1rem 1rem" }}
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
