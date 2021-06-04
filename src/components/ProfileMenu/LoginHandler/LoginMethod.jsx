import styled, { css } from "styled-components";

const Container = styled.div(
  ({ active }) => css`
    margin-bottom: 1rem;
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

      ${!active &&
      css`
        opacity: 0.6;
        box-shadow: none;

        :hover {
          box-shadow: none;
        }
      `}
    }
  `
);

const LoginMethod = ({
  method: { handler = () => {}, icon = "", label = "", active = false },
}) => {
  return (
    <Container active={active}>
      <div className="option" onClick={() => (active ? handler() : () => {})}>
        <div className="option__icon">
          <img src={icon} alt="google login" />
        </div>
        <p className="option__text">{label}</p>
      </div>
    </Container>
  );
};

export default LoginMethod;
