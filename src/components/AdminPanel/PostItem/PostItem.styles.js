import styled, { css } from "styled-components";

export default styled.div(
  ({ isVerified }) => css`
    margin-bottom: 1.2rem;

    box-shadow: var(--shadow-default);
    padding: 2rem;
    border-radius: 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${isVerified
      ? "var(--color-success-light)"
      : "var(--color-danger-light)"};

    color: #000;

    .post {
      flex: 0 0 1;
      width: 100%;
      &__language {
        color: var(--color-logo-1);
        font-size: 1.2rem;
        font-weight: 600;
      }

      &__title {
        font-weight: 700;
        font-size: 2rem;
        color: var(--color-logo-1);
        padding: 0.6rem 0;

        &:hover {
          cursor: pointer;
        }
      }

      &__info {
        color: var(--color-text);
        display: flex;
        align-items: center;
        font-weight: 600;
        &__date {
          margin-right: 4.8rem;
        }
      }
    }

    .actions {
      flex: 0 0 10%;
      padding: 0 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      @media only screen and (max-width: 800px) {
        flex: 0 0 20%;
      }

      &__action {
        transition: all 0.2s;
        &:hover {
          cursor: pointer;
          transform: scale(1.5);
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  `
);
