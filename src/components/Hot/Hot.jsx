import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    flex: 0 0 24%;
    background-color: var(--color-background);
  `
);

const Hot = () => {
  return <Container></Container>;
};

export default Hot;
