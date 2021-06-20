import styled, { css } from "styled-components";
import noResultsFound from "images/no-results.svg";

const Wrapper = styled.div(
  () => css`
    margin-top: 4.8rem;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }

      height: 100%;

      .illustration {
        width: 24rem;
      }

      .message {
        color: var(--color-text);
        font-size: 2rem;
        margin-left: 2rem;
        padding: 2rem;

        @media only screen and (max-width: 800px) {
          margin-left: 0;
          margin-top: 3.2rem;
          text-align: center;
        }
      }
    }

    .cta {
      color: var(--color-logo-1);
      text-decoration: underline;
      font-size: 1.6rem;
      text-align: center;
      cursor: pointer;
    }
  `
);

const NoResultsFound = ({
  action = { label: "", cta: () => {} },
  message = "",
}) => {
  return (
    <Wrapper>
      <div className="container">
        <img className="illustration" src={noResultsFound} alt="" />
        <p className="message">{message}</p>
      </div>

      {!!action.label && (
        <div className="cta" onClick={action.cta}>
          {action.label}
        </div>
      )}
    </Wrapper>
  );
};

export default NoResultsFound;
