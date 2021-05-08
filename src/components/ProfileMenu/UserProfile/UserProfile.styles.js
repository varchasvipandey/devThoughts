import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    margin-top: 3.2rem;
    margin-bottom: 2rem;

    /* Profile image */
    .profile-image {
      text-align: center;
      img {
        border-radius: 50%;
        width: 7.8rem;
      }
    }

    /* Profile info */
    .profile-info {
      text-align: center;
      padding: 0 10rem;

      &__displayName {
        font-size: 1.8rem;
        color: var(--color-logo-1);
        font-weight: 600;
      }

      &__email {
        font-size: 1.2rem;
        color: var(--color-text);
      }
    }
  `
);
