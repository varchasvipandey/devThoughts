import { useState } from "react";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";

import { Logo, Modal } from "components/shared";
import { ProfileMenu } from "components";

const NavContainer = styled.nav(
  () => css`
    box-shadow: var(--shadow-default);
    padding: 1rem var(--padding-app-x);
    background-color: var(--color-background);
    position: fixed;
    width: 100%;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .user {
      position: relative;
      &__avatar {
        width: 3.2rem;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: var(--shadow-spreaded);
      }
    }
  `
);

const Navbar = ({ themeHandler }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Context */
  const { currentUser } = useAuth();

  // Logo handler
  const logoHandler = () => {
    window.location.replace("/");
  };

  /* User profile  */
  const modalHandler = () => {
    if (menuOpen === true) {
      const backdrop = document.getElementById("backdrop");
      if (backdrop) backdrop.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        setMenuOpen((prev) => !prev);
      }, 500);
    } else setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <NavContainer>
        <Logo cta={logoHandler} />
        <div className="user">
          <img
            className="user__avatar"
            src={
              currentUser?.photoURL ||
              "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
            }
            alt={currentUser?.displayName || "user profile"}
            onClick={modalHandler}
          />
        </div>
      </NavContainer>

      {menuOpen && (
        <Modal modalHandler={modalHandler}>
          <ProfileMenu themeHandler={themeHandler} />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
