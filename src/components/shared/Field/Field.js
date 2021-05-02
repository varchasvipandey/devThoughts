import styled, { css } from "styled-components";

export default styled.input(({ style }) => [
  css`
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    border: none;
    background-color: var(--color-field);
    box-shadow: var(--shadow-default);

    &:focus {
      outline: none;
    }

    &::placeholder {
      opacity: 0.8;
    }
  `,
  { ...style },
]);
