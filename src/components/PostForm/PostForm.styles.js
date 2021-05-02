import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    width: 60rem;

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
