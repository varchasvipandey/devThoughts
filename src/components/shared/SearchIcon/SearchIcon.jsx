import styled, { css } from "styled-components";

const SVGContainer = styled.svg(({ style }) => [
  css`
    width: 1.6rem;
    height: 1.6rem;
  `,
  { ...style },
]);

const SearchIcon = ({ style }) => {
  return (
    <SVGContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      style={style}
    >
      <title>Asset 19</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            class="cls-1"
            d="M63.22,59.45,47.3,43.53a26.7,26.7,0,1,0-3.77,3.77L59.45,63.22a2.67,2.67,0,0,0,3.77-3.77ZM26.67,48A21.34,21.34,0,1,1,48,26.67,21.36,21.36,0,0,1,26.67,48Z"
          />
        </g>
      </g>
    </SVGContainer>
  );
};

export default SearchIcon;
