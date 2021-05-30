import Fire from "./Fire";
import { MenuButton, DropdownMenu } from "components/shared";

import { dateAgoFormat } from "helpers";

import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    .post {
      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__title {
          font-size: 1.6rem;
          color: var(--color-text-post-highlights);
        }

        &__menu {
          position: relative;
        }
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
  openAuthActionMenu = false,
  setOpenAuthActionMenu = () => {},
  handleAuthActionMenu = () => {},
}) => {
  return (
    <Container>
      <div
        className="post"
        onClick={() => openAuthActionMenu && setOpenAuthActionMenu(false)}
      >
        {/* Title */}
        <div className="post__header">
          <h2 className="post__header__title">{thought?.title}</h2>
          {currentUser?.uid === thought?.uid && (
            <div className="post__header__menu">
              <MenuButton cta={handleAuthActionMenu} />
              {openAuthActionMenu && (
                <DropdownMenu
                  style={{ left: "-12rem" }}
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
        </div>
      </div>
    </Container>
  );
};

export default Post;
