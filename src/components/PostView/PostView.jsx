import { useState } from "react";
import Layout from "Layout/Layout";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";

import Post from "./Post";

import { EditIcon, DeleteIcon } from "components/shared";

const Container = styled.div(
  () => css`
    flex: 1;
    margin-top: 6.4rem;
    padding: 0 var(--padding-app-x);
  `
);

const PostView = ({
  thought = {},
  thoughtInteractions = {},
  updateInteractions = () => {},
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
    <Layout
      title={`${thought.title} by ${thought.author} | devThoughts`}
      desc={thought?.body?.slice(0, 30)}
      keywords={[thought?.language, thought?.author].join(",")}
      url={window.location.href}
    >
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
    </Layout>
  );
};

export default PostView;
