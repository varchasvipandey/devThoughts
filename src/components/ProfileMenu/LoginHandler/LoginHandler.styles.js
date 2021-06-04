import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    /* Login handler */
    .login-handler {
      margin-top: 3.2rem;
      margin-bottom: 2rem;
      padding: 0 10rem;

      @media only screen and (max-width: 800px) {
        padding: 0 4rem;
      }

      &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.2rem;

        hr {
          flex: 1;
          margin-top: 0.6rem;
          opacity: 0.4;
        }

        p {
          font-size: 1.4rem;
          padding: 0 1.2rem;
          color: var(--color-text);
        }
      }

      &__message {
        margin-top: 1.6rem;
        font-size: 1.2rem;
        color: var(--color-logo-1);
        text-align: center;
      }
    }
  `
);
