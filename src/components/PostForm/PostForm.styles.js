import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    width: 60rem;

    .error {
      margin: 1rem 0;
      text-align: center;
      p {
        color: red;
        font-size: 1.4rem;
      }
    }

    .w-100 {
      width: 100%;
      input,
      button,
      textarea {
        width: 100%;
      }
    }

    .flex {
      display: flex;
      align-items: center;
      div {
        &:first-of-type {
          flex: 0 0 60%;
          margin-right: 1rem;
        }
        &:second-of-type {
          flex: 0 0 20%;
        }
      }
    }

    .field {
      margin-bottom: 1rem;
    }
  `
);
