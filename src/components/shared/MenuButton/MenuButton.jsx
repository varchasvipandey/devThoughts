import styled, { css } from "styled-components";

import { SVGContainer as Container } from "components/shared";

const SVGContainer = styled(Container)(({ style }) => [
  css`
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  `,
  { ...style },
]);

const MenuButton = ({ style, cta }) => {
  return (
    <SVGContainer
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      style={{ enableBackground: "new 0 0 32 32" }}
      onClick={cta}
    >
      <g>
        <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z" />
        <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z" />
        <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z" />
      </g>
    </SVGContainer>
  );
};

export default MenuButton;
