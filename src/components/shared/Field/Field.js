import styled, { css } from "styled-components";

export default styled.input(({ style, flat }) => [
  css`
    font-size: 1.4rem;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    border: none;
    background-color: var(--color-field);
    box-shadow: var(--shadow-default);

    ${flat &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: none;
      transition: all 0.3s;

      &:focus {
        border-color: var(--color-violet);
      }
    `}

    &:focus {
      outline: none;
    }

    &::placeholder {
      opacity: 0.8;
    }
  `,
  { ...style },
]);
