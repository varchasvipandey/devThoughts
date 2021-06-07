import ReactLoaderSpinner from "react-loader-spinner";
import styled, { css } from "styled-components";
import { Backdrop } from "components/shared";

const Container = styled.div(
  () => css`
    .loader {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
);

const Loader = () => {
  return (
    <Backdrop>
      <Container>
        <div className="loader">
          <ReactLoaderSpinner
            type="MutatingDots"
            color="var(--color-violet)"
            secondaryColor="var(--color-text-post-highlights)"
            height={100}
            width={100}
          />
        </div>
      </Container>
    </Backdrop>
  );
};

export default Loader;
