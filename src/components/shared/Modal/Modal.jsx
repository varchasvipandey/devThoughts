import styled, { css } from "styled-components";
import { FloatButton, Backdrop } from "components/shared";

const Container = styled.div(
  () => css`
    .modal {
      background-color: var(--color-background);
      min-width: 16rem;
      min-height: 6rem;

      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: 8px;

      &__body {
        padding: 2.4rem var(--padding-app-x);
      }
    }
  `
);

const Modal = ({ children, modalHandler }) => {
  return (
    <Backdrop>
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
            cta={modalHandler}
          />
          <div className="modal__body">{children}</div>
        </div>
      </Container>
    </Backdrop>
  );
};

export default Modal;
