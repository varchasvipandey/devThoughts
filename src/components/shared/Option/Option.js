import styled, { css } from "styled-components";

export default styled.p(
  ({ selected }) => css`
    font-size: 1.4rem;
    background-color: transparent;
    padding: 1.2rem var(--padding-app-x);
    cursor: pointer;
    font-weight: 600;
    color: var(--color-text-option-sidenav);
    text-transform: capitalize;

    &:hover {
      background-color: var(--color-background-transparent);
      color: var(--color-text-option-selected-sidenav);
    }

    &:active {
      background-color: var(--color-background);
    }

    ${selected &&
    css`
      color: var(--color-text-option-selected-sidenav);
      background-color: var(--color-background);
    `}
  `
);
