import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    width: 60rem;

    @media only screen and (max-width: 800px) {
      width: 40rem;
    }

    @media only screen and (max-width: 440px) {
      width: 32rem;
    }

    @media only screen and (max-width: 320px) {
      width: 24rem;
    }

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

      @media only screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
      }

      div {
        &:first-of-type {
          flex: 0 0 60%;
          margin-right: 1rem;

          @media only screen and (max-width: 800px) {
            margin-right: 0rem;
            margin-bottom: 1rem;
          }
        }
        &:second-of-type {
          flex: 0 0 20%;
        }
      }
    }

    .with-controls {
      position: relative;
      &__controls {
      }
    }

    .field {
      margin-bottom: 1rem;
    }

    .datalist {
      display: block;
    }
  `
);
