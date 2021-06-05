import styled, { css } from "styled-components";

const SVGContainer = styled.svg(({ style }) => [
  css`
    width: 1.6rem;
    height: 1.6rem;
  `,
  { ...style },
]);

const BackIcon = ({ style }) => {
  return (
    <SVGContainer
      enable-background="new 0 0 32 32"
      id="Слой_1"
      version="1.1"
      viewBox="0 0 32 32"
      style={style}
    >
      <path
        clip-rule="evenodd"
        d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"
        fill-rule="evenodd"
        id="Arrow_Back"
      />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </SVGContainer>
  );
};

export default BackIcon;