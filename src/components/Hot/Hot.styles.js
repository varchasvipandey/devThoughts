import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    flex: 0 0 24%;
    background-color: var(--color-background);
    position: relative;
    cursor: pointer;

    .wrapper {
      position: fixed;
      /* width: 100%; */
      padding: 0 var(--padding-area-x);

      @media only screen and (max-width: 800px) {
        position: relative;
      }
    }

    .title {
      margin-top: 8rem;
      height: 4rem;
      display: flex;
      align-items: center;
      font-weight: 700;

      @media only screen and (max-width: 800px) {
        margin-top: 2rem;
      }

      p {
        font-size: 1.4rem;
        color: var(--color-logo-1);
        font-weight: 600;
      }
    }
  `
);
