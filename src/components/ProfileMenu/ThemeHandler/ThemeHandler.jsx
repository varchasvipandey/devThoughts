import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    /* Theme handler */
    .theme-handler {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 2.4rem;
        margin-right: 1rem;
      }

      p {
        font-size: 1.2rem;
        color: var(--color-text);
        font-weight: 700;
      }
    }
  `
);

const ThemeHandler = ({ toggleTheme = () => {}, themeIcon = "" }) => {
  return (
    <Container>
      <div className="theme-handler" onClick={toggleTheme}>
        <img src={themeIcon} alt="switch theme" />
        <p>Switch Theme</p>
      </div>
    </Container>
  );
};

export default ThemeHandler;
