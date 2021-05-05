import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    background-color: var(--color-background);
    min-height: 100vh;

    display: flex;

    position: relative;

    .sidenav {
      flex: 0 0 18%;
      position: relative;
    }
  `
);
