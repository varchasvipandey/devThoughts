import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { dateAgoFormat } from "helpers";

const Container = styled.div(({ style }) => [
  css`
    box-shadow: var(--shadow-default);
    cursor: pointer;

    .block {
      padding: 1rem 1.2rem;
    }

    .title {
      font-size: 1.6rem;
      color: var(--color-text-post-highlights);
      background-color: var(--color-post-highlights);
    }

    .body {
      font-size: 1.2rem;
      color: var(--color-text-post-body);
      background-color: var(--color-post-body);
    }

    .info {
      color: var(--color-text-post-highlights);
      background-color: var(--color-post-highlights);
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,
  { ...style },
]);

const Thought = ({ thought = {}, style = {}, postUrl = "" }) => {
  // Hooks init
  const history = useHistory();

  return (
    <Container style={style} onClick={() => history.push(postUrl)}>
      <h3 className="title block">{thought?.title}</h3>
      <p className="body block">{thought?.body?.slice(0, 400) + "..."}</p>
      <div className="info block">
        <p className="info__date">
          {dateAgoFormat(thought?.date.toDate()) || ""}
        </p>
        <p className="author">{thought?.author}</p>
      </div>
    </Container>
  );
};

export default Thought;
