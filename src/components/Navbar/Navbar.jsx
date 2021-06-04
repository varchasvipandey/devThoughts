import { useState } from "react";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";
import { modalHandler as operateModal } from "helpers";

import { Logo, Modal, Hamburger } from "components/shared";
import { ProfileMenu } from "components";

const NavContainer = styled.nav(
  () => css`
    box-shadow: var(--shadow-default);
    padding: 1rem var(--padding-app-x);
    background-color: var(--color-background);
    position: fixed;
    width: 100%;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .control {
      display: flex;
      align-items: center;
      &__sidenav {
        display: none;

        @media only screen and (max-width: 1200px) {
          display: block;
          margin-right: 2rem;
          animation: zoomIn 0.2s;
        }
      }
    }

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

const Navbar = ({
  themeHandler,
  sidenavOpen = false,
  handleSidenav = () => {},
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Context */
  const { currentUser } = useAuth();

  // Logo handler
  const logoHandler = () => {
    window.location.replace("/");
  };

  /* User profile  */
  const modalHandler = () => operateModal(menuOpen, setMenuOpen);

  return (
    <>
      <NavContainer>
        <div className="control">
          <div className="control__sidenav">
            <Hamburger active={sidenavOpen} action={handleSidenav} />
          </div>
          <Logo cta={logoHandler} />
        </div>

        <div className="user">
          <img
            className="user__avatar"
            src={
              currentUser?.photoURL ||
              "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
            }
            alt={currentUser?.displayName?.split("")[0] || "user profile"}
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
