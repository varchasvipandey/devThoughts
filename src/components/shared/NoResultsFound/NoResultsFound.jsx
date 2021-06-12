import styled, { css } from "styled-components";
import { SearchIcon } from "components/shared";

const Wrapper = styled.div(
  () => css`
    background-color: rgba(0, 0, 0, 0.05);
    width: 80%;
    margin: 0 auto;
    margin-top: 4.8rem;
    padding: 4rem;
    height: 40%;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }

      height: 100%;

      .message {
        color: var(--color-text);
        font-size: 2rem;
        margin-left: 2rem;

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
        <SearchIcon
          style={{
            width: "4.2rem",
            height: "4.2rem",
            fill: "var(--color-text)",
            opacity: "0.8",
          }}
        />
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
