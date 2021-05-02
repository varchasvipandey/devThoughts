import styled, { css } from "styled-components";

export default styled.textarea(({ style, flat }) => [
  css`
    resize: none;
    font-size: 1.4rem;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    border: none;
    background-color: var(--color-field);
    box-shadow: var(--shadow-default);
    height: 20rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

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
      opacity: 0.6;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
    }
  `,
  { ...style },
]);
