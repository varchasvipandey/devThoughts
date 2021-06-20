import { useState } from "react";
import styled, { css } from "styled-components";
import { Field, Button } from "components/shared";

const Container = styled.div(
  () => css`
    padding: 0 var(--padding-app-x);
    max-width: 800px;

    .title {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--color-text);
      padding: 1rem 0;
    }

    .form {
      display: flex;

      flex-direction: column;
      align-items: flex-start;

      input {
        width: 100%;
        margin-bottom: 1rem;
        height: 3.6rem;
      }

      button {
        width: 100%;
        height: 3.6rem;
      }
    }
  `
);

const AddNewForm = ({ addLanguage = () => {} }) => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleAddLanguage = () => {
    if (!name || !displayName) {
      alert("Language name and display name are required");
      return;
    }
    // Call addNewLanguage
    addLanguage(name, displayName);

    //Clear states
    setName("");
    setDisplayName("");
  };

  return (
    <Container>
      <div className="title">Add Language</div>
      <div className="form">
        <Field
          placeholder="Language Name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        ></Field>
        <Field
          placeholder="Display Name"
          value={displayName}
          onChange={({ target: { value } }) => setDisplayName(value)}
        ></Field>
        <Button label="Add" cta={handleAddLanguage} />
      </div>
    </Container>
  );
};

export default AddNewForm;
