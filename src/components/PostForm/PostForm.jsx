import { useRef } from "react";
import Container from "./PostForm.styles";

/* Components */
import { Field, Button, TextArea } from "components/shared";

const PostForm = ({ post }) => {
  const titleRef = useRef();
  const languageRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();

  const handleSubmit = () => {
    const data = {
      title: titleRef.current.value,
      language: languageRef.current.value?.toLowerCase(),
      body: bodyRef.current.value,
      author: authorRef.current.value,
    };

    console.log({ data });
    post(data);
  };

  return (
    <Container>
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
        />
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
          <Field flat type="text" ref={authorRef} placeholder="Author" />
        </div>
        <div className="w-100">
          <Button label="Publish thought" cta={handleSubmit} />
        </div>
      </div>
    </Container>
  );
};

export default PostForm;
