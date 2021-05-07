import styled, { css } from "styled-components";

const Container = styled.div(({ style }) => [
  css`
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
  `,
  { ...style },
]);

const Backdrop = ({ children, style = {} }) => {
  return (
    <Container id="backdrop" style={style}>
      <div className="content">{children}</div>
    </Container>
  );
};

export default Backdrop;
