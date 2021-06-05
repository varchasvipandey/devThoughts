import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    flex: 1;

    .post-search {
      margin-top: 8rem;
      padding: 0 var(--padding-app-x);
    }

    .thoughts-list {
      margin-top: 4rem;
      padding: 0 var(--padding-app-x);

      &::-webkit-scrollbar {
        display: none;
      }
    }
  `
);
