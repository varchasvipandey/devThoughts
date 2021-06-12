import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    min-height: 100vh;
    background-color: var(--color-background);

    .unauthorized {
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: var(--padding-app-x);
      &__img {
        width: 100%;
        max-width: 40rem;
      }
      &__msg {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-violet);
        text-align: center;
        margin-top: 3.2rem;
      }
    }

    .load-more {
      padding: var(--padding-app-x);
    }
  `
);
