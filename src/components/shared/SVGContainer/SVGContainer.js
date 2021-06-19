import styled, { css } from "styled-components";

const SVGContainer = styled.svg(({ style }) => [
  css`
    -webkit-tap-highlight-color: transparent;
    width: 1.6rem;
    height: 1.6rem;
    fill: var(--color-text);
  `,
  { ...style },
]);

export default SVGContainer;
