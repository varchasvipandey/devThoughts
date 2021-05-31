import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    background-color: var(--color-background);
    min-height: 100vh;

    display: flex;

    position: relative;

    .sidenav {
      z-index: 1;
      flex: 0 0 18%;
      position: relative;
      transition: all 0.3s;
    }

    .content {
      display: flex;
      width: 100%;

      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }
    }

    @media only screen and (max-width: 1200px) {
      .sidenav {
        position: absolute;
        left: -100%;
      }
    }
  `
);
