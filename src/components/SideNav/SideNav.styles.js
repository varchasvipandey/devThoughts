import styled, { css } from "styled-components";

export default styled.aside(
  () => css`
    background-color: var(--color-sidenav);
    position: fixed;
    height: 100%;

    @media only screen and (max-width: 800px) {
      min-width: 20rem;
    }

    .language-search {
      margin-top: 8rem;
      padding: 0 var(--padding-area-x);
    }

    .language-select {
      margin-top: 4rem;
      height: 60vh;
      overflow-y: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  `
);
