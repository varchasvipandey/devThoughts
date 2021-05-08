import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    .option {
      display: flex;
      align-items: center;
      box-shadow: var(--shadow-default);
      min-width: 24rem;
      transition: all 0.3s;

      &__icon {
        padding: 0.4rem 1rem;
        img {
          width: 3.2rem;
        }
      }

      &__text {
        flex: 1;
        padding: 0.4rem 1rem;
        font-size: 1.4rem;
        text-align: center;
        color: var(--color-text);
      }

      :hover {
        cursor: pointer;
        box-shadow: var(--shadow-deep-blur);
      }
    }
  `
);

const LoginMethod = ({ handler = () => {}, icon = "", label = "" }) => {
  return (
    <Container>
      <div className="option" onClick={handler}>
        <div className="option__icon">
          <img src={icon} alt="google login" />
        </div>
        <p className="option__text">{label}</p>
      </div>
    </Container>
  );
};

export default LoginMethod;
