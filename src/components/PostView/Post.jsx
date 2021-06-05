import { useHistory } from "react-router-dom";

import Fire from "./Fire";
import { MenuButton, DropdownMenu, BackIcon } from "components/shared";

import { dateAgoFormat } from "helpers";

import styled, { css } from "styled-components";

const Container = styled.div(
  ({ currentWidth }) => css`
    margin-bottom: 2rem;
    .post {
      &__interaction {
        padding: 1.2rem 0;
      }

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__title {
          color: var(--color-text-post-highlights);
          font-size: 2.4rem;
        }

        &__menu {
          position: relative;
        }
      }

      &__info {
        color: var(--color-text-post-highlights);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.8rem;
      }

      &__body {
        font-size: 1.6rem;
        color: var(--color-text-post-body);
        margin-top: 2rem;
        h1,
        h2,
        h3 {
          font-size: 1.8rem;
        }

        img {
          width: ${`${currentWidth - 20}px`};
          max-width: 400px;
        }
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
  openAuthActionMenu = false,
  setOpenAuthActionMenu = () => {},
  handleAuthActionMenu = () => {},
}) => {
  const history = useHistory();

  return (
    <Container currentWidth={window.innerWidth}>
      <div
        className="post"
        onClick={() => openAuthActionMenu && setOpenAuthActionMenu(false)}
      >
        {/* Header interaction */}
        <div className="post__interaction">
          <div
            className="post__interaction__back"
            onClick={() => history.goBack()}
          >
            <BackIcon
              style={{
                fill: "var(--color-logo-1)",
                width: "2.4rem",
                height: "2.4rem",
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="post__header">
          {/* Header title */}
          {!!thought?.title && (
            <h2 className="post__header__title">{thought?.title}</h2>
          )}

          {currentUser?.uid === thought?.uid && (
            <div className="post__header__menu">
              <MenuButton cta={handleAuthActionMenu} />
              {openAuthActionMenu && (
                <DropdownMenu
                  style={{ left: "-18rem" }}
                  options={authActions}
                />
              )}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="post__info">
          <p className="post__info--author">{thought?.author}</p>
          <p className="post__info--date">
            Published: {dateAgoFormat(thought?.date?.toDate()) || ""}
          </p>
        </div>

        {/* Body */}
        <p
          className="post__body line-height"
          dangerouslySetInnerHTML={{ __html: thought?.body }}
        ></p>

        {/* Interaction */}
        {!!thought?.body && (
          <div className="post__interact">
            <Fire
              fire={thoughtInteractions?.fire}
              updateFire={currentUser?.uid ? updateFire : handleLoginModal}
              hasThisUserInteracted={userProfile?.likedPosts?.includes(
                thought?.id
              )}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Post;
