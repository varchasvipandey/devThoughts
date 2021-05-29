import Fire from "./Fire";
import Actions from "./Actions";

import { dateAgoFormat } from "helpers";

import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
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
        font-size: 1.4rem;
        color: var(--color-text-post-body);
        margin-top: 2rem;
      }

      &__interact {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  `
);

const Post = ({
  thought = {},
  thoughtInteractions = {},
  currentUser = {},
  userProfile = {},
  updateFire = () => {},
  handleLoginModal = () => {},
  authActions = [],
}) => {
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
        {/* Interaction */}
        <div className="post__interact">
          <Fire
            fire={thoughtInteractions?.fire}
            updateFire={currentUser?.uid ? updateFire : handleLoginModal}
            hasThisUserInteracted={userProfile?.likedPosts?.includes(
              thought?.id
            )}
          />
          {currentUser?.uid === thought?.uid && (
            <Actions actions={authActions} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Post;
