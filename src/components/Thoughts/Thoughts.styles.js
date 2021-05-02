import styled, { css } from "styled-components";

export default styled.div(
  () => css`
    flex: 1;
    padding: 0 var(--padding-app-x);
    .post-search {
      margin-top: 8rem;
    }
    .thoughts-list {
      margin-top: 4rem;
    }
  `
);
