import styled, { css } from "styled-components";
import { Logo } from "components/shared";

const NavContainer = styled.nav(
  () => css`
    box-shadow: var(--shadow-default);
    padding: 1.2rem var(--padding-app-x);
    background-color: var(--color-background);
    position: fixed;
    width: 100%;
    z-index: 1;
  `
);

const Navbar = ({ themeHandler }) => {
  return (
    <NavContainer>
      <Logo cta={themeHandler} />
    </NavContainer>
  );
};

export default Navbar;
