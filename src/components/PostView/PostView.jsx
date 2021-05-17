import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";
import { dateAgoFormat } from "helpers";

import Fire from "./Fire";
import Actions from "./Actions";

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

const PostView = ({
  thought = {},
  thoughtInteractions = {},
  updateInteractions = () => {},
}) => {
  /* Context */
  const { currentUser } = useAuth();

  // Add Fire
  const addFire = () => {
    const data = {
      fire: thoughtInteractions?.fire + 1,
    };
    updateInteractions(thoughtInteractions?.id, data);
    // TODO: send uid to updateInteractions
  };

  // Update page title
  useEffect(() => {
    document.title = thought.title
      ? `${thought.title} by ${thought.author} | devThoughts`
      : "devThoughts";
  }, [thought]);

  /* Auth actions */
  const authActions = [
    { label: "Delete", cta: () => {} },
    { label: "Update", cta: () => {} },
  ];

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
          <Fire fire={thoughtInteractions?.fire} addFire={addFire} />
          {currentUser?.uid === thought?.uid && (
            <Actions actions={authActions} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default PostView;
