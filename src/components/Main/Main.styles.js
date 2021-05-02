import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    background-color: var(--color-background);
    height: 100vh;

    display: flex;

    position: relative;
  `
);
