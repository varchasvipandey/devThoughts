import styled, { css } from "styled-components";

const LogoContainer = styled.h2(
  ({ size }) => css`
    font-size: ${size * 1.6 + "rem"};

    color: var(--color-logo-1);
    span {
      color: var(--color-logo-2);
    }

    cursor: pointer;
  `
);

const Logo = ({ size = 1, cta = () => {} }) => {
  return (
    <LogoContainer size={size} onClick={cta} className="disabled-select">
      dev<span>Thoughts</span>
    </LogoContainer>
  );
};

export default Logo;
