import styled, { css } from "styled-components";

const Btn = styled.button(({ variant, disabled, style }) => [
  css`
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

    ${variant === "tertiary" &&
    css`
      color: var(--color-logo-1);
      border-color: transparent;
      background-color: transparent;

      &:hover {
        color: var(--color-text);
        text-decoration: underline;
        border-color: transparent;
        background-color: transparent;
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
  `,
  { ...style },
]);

const Button = ({
  label = "",
  cta = () => {},
  variant = "primary",
  disabled = false,
  style = {},
}) => {
  return (
    <Btn onClick={cta} variant={variant} disabled={disabled} style={style}>
      {label}
    </Btn>
  );
};

export default Button;
