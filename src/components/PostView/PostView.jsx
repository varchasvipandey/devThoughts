import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";

import Post from "./Post";

import { EditIcon, DeleteIcon } from "components/shared";

const Container = styled.div(
  () => css`
    flex: 1;
    margin-top: 8rem;
    padding: 0 var(--padding-app-x);
  `
);

const PostView = ({
  thought = {},
  thoughtInteractions = {},
  updateInteractions = () => {},
  deleteThought = () => {},
  postThought = () => {},
  handleUpdateFormModal = () => {},
  handleDeleteModal = () => {},
  handleLoginModal = () => {},
}) => {
  /* UI States */

  const [openAuthActionMenu, setOpenAuthActionMenu] = useState(false);

  /* Context */
  const { currentUser, userProfile } = useAuth();

  // Add Fire
  const updateFire = () => {
    const data = {
      fire: userProfile?.likedPosts?.includes(thought?.id)
        ? thoughtInteractions?.fire - 1
        : thoughtInteractions?.fire + 1,
    };
    updateInteractions(
      thoughtInteractions?.id,
      data,
      currentUser.uid,
      userProfile.likedPosts
    );
  };

  // Handle auth action menu
  const handleAuthActionMenu = (e) => {
    e.stopPropagation();
    setOpenAuthActionMenu((prev) => !prev);
  };

  // Update page title
  useEffect(() => {
    document.title = thought.title
      ? `${thought.title} by ${thought.author} | devThoughts`
      : "devThoughts";
  }, [thought]);

  /* Auth actions */
  const authActions = [
    {
      label: "Edit thought",
      icon: <EditIcon />,
      cta: () =>
        handleUpdateFormModal({
          selectedLanguage: thought?.language || "",
          postTitle: thought?.title || "",
          postBody: thought?.body || "",
          postId: thought?.id || "",
        }),
    },
    {
      label: "Delete thought",
      icon: <DeleteIcon />,
      cta: () =>
        handleDeleteModal({
          thoughtTitle: thought?.title || "",
          thoughtId: thought?.id || "",
          thoughtLanguage: thought?.language || "",
        }),
    },
  ];

  return (
    <>
      <Container>
        <Post
          thought={thought}
          thoughtInteractions={thoughtInteractions}
          currentUser={currentUser}
          userProfile={userProfile}
          updateFire={updateFire}
          handleLoginModal={handleLoginModal}
          authActions={authActions}
          openAuthActionMenu={openAuthActionMenu}
          setOpenAuthActionMenu={setOpenAuthActionMenu}
          handleAuthActionMenu={handleAuthActionMenu}
        />
      </Container>
    </>
  );
};

export default PostView;
