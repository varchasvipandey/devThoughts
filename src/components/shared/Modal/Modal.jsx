import styled, { css } from "styled-components";
import { FloatButton } from "components/shared";

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

    .modal {
      background-color: var(--color-white);
      min-width: 16rem;
      min-height: 6rem;

      position: relative;

      &__body {
        padding: 2rem var(--padding-app-x);
      }
    }
  `
);

const Modal = ({ children, setState }) => {
  const cancelHandler = () => setState(false);

  return (
    <Container>
      <div className="modal">
        <FloatButton
          label="+"
          style={{
            position: "absolute",
            right: "-2rem",
            top: "-2rem",
            transform: "scale(1) rotate(45deg)",
          }}
          cta={cancelHandler}
        />
        <div className="modal__body">{children}</div>
      </div>
    </Container>
  );
};

export default Modal;
