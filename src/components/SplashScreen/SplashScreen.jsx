import styled, { css } from "styled-components";
import { Backdrop, Logo } from "components/shared";

const Container = styled.div(
  () => css`
    .logo-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
);

const SplashScreen = () => {
  return (
    <Backdrop style={{ backgroundColor: "transparent" }}>
      <Container>
        <div className="logo-container">
          <Logo
            style={{ color: "#465c8d", span: { color: "#3e3843" } }}
            size={2}
          />
        </div>
      </Container>
    </Backdrop>
  );
};

export default SplashScreen;
