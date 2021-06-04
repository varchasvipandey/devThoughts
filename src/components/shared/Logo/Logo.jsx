import styled, { css } from "styled-components";

const LogoContainer = styled.h2(({ size, style }) => [
  css`
    font-size: ${size * 1.6 + "rem"};

    color: var(--color-logo-1);
    span {
      color: var(--color-logo-2);
    }

    cursor: pointer;
  `,
  { ...style },
]);

const Logo = ({ size = 1, cta = () => {}, style = {} }) => {
  return (
    <LogoContainer
      size={size}
      onClick={cta}
      className="disabled-select"
      style={style}
    >
      dev<span>Thoughts</span>
    </LogoContainer>
  );
};

export default Logo;
