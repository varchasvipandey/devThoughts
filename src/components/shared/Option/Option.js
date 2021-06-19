import styled, { css } from "styled-components";

export default styled.p(
  ({ selected, infoOption }) => css`
    font-size: 1.4rem;
    background-color: transparent;
    padding: 1.2rem var(--padding-app-x);
    cursor: pointer;
    font-weight: 600;
    color: var(--color-text-option-sidenav);
    text-transform: capitalize;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

    ${infoOption &&
    css`
      &::after {
        content: "From us!";
        font-size: 0.8rem;
        margin-left: 1rem;
        margin-top: 0.2rem;
        color: var(--color-background);
        background-color: var(--color-logo-1);
        padding: 2px 6px;
        border-radius: 50% 10% / 10% 40%;
        font-weight: 700;

        ${selected &&
        css`
          color: var(--color-background);
          background-color: var(--color-logo-1);
        `}
      }
    `}
  `
);
