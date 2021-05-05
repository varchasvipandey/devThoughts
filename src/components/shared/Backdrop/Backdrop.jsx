import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    background-color: var(--color-backdrop);
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    animation: fadeIn 0.5s;

    .content {
      position: relative;
      height: 100%;
      width: 100%;
    }
  `
);

const Backdrop = ({ children }) => {
  return (
    <Container id="backdrop">
      <div className="content">{children}</div>
    </Container>
  );
};

export default Backdrop;
