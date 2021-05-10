import styled, { css } from "styled-components";

const Btn = styled.button(
  ({ variant, disabled }) => css`
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid transparent;
    color: var(--color-field);
    background-color: var(--color-violet);
    border-radius: 4px;
    transition: all 0.3s;
    backface-visibility: hidden;

    &:hover {
      cursor: pointer;
      color: var(--color-violet);
      background-color: var(--color-field);
      border-color: var(--color-violet);
    }

    &:active {
      transform: scale(0.95);
    }

    ${variant === "secondary" &&
    css`
      color: var(--color-logo-1);
      border-color: var(--color-logo-1);
      background-color: transparent;

      &:hover {
        color: var(--color-field);
        border-color: transparent;
        background-color: var(--color-logo-1);
      }
    `}

    ${disabled &&
    css`
      opacity: 0.4;

      &:hover {
        color: var(--color-field);
        background-color: var(--color-violet);
      }
    `}
  `
);

const Button = ({
  label = "",
  cta = () => {},
  variant = "primary",
  disabled = false,
}) => {
  return (
    <Btn onClick={cta} variant={variant} disabled={disabled}>
      {label}
    </Btn>
  );
};

export default Button;
