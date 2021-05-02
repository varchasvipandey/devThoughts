import styled, { css } from "styled-components";

const Btn = styled.button(
  () => css`
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
  `
);

const Button = ({ label = "", cta = () => {} }) => {
  return <Btn onClick={cta}>{label}</Btn>;
};

export default Button;
