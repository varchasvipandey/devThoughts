import styled, { css } from "styled-components";
import { Button } from "components/shared";

const Container = styled.div(
  () => css`
    padding: 0 10rem;
    margin-top: 3.2rem;
    button {
      width: 100%;
    }
  `
);

const LogoutHandler = ({ cta = () => {} }) => {
  return (
    <Container>
      <Button label="Log out" cta={cta} variant="secondary" />
    </Container>
  );
};

export default LogoutHandler;
