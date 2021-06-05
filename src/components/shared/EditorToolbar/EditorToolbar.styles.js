import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    position: absolute;
    width: 100%;
    height: 3.6rem;
    background-color: var(--color-background-transparent);
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 0.4rem;
    }
  `
);

export const Button = styled.div(
  ({ style }) => css`
    min-width: 3.2rem;
    height: 2.4rem;
    padding: 0 0.8rem;
    margin-right: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-default);
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 1.2rem;
    border-radius: 4px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

    transition: all 0.1s;

    &:hover {
      color: var(--color-background);
      background-color: var(--color-logo-1);
    }

    &:active {
      transform: scale(0.95);
    }

    ${style};
  `
);
