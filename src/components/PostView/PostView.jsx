import styled, { css } from "styled-components";
import { dateAgoFormat } from "helpers";

const Container = styled.div(
  () => css`
    flex: 1;
    margin-top: 8rem;

    padding: 0 var(--padding-app-x);

    .post {
      &__title {
        font-size: 1.6rem;
        color: var(--color-text-post-highlights);
      }

      &__info {
        color: var(--color-text-post-highlights);
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.8rem;
      }

      &__body {
        font-size: 1.2rem;
        color: var(--color-text-post-body);
        margin-top: 2rem;
      }
    }
  `
);

const PostView = ({ thought = {} }) => {
  return (
    <Container>
      <div className="post">
        {/* Title */}
        <h2 className="post__title">{thought?.title}</h2>
        {/* Info */}
        <div className="post__info">
          <p className="post__info--author">{thought?.author}</p>
          <p className="post__info--date">
            Published: {dateAgoFormat(thought?.date?.toDate()) || ""}
          </p>
        </div>
        {/* Body */}
        <p className="post__body">{thought?.body}</p>
      </div>
    </Container>
  );
};

export default PostView;
