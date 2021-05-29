import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAuth } from "contexts/AuthContext";
import { useGlobalData } from "contexts/GlobalDataContext";
import { modalHandler } from "helpers";

import Post from "./Post";
import ConfirmDelete from "./ConfirmDelete";

import { Modal } from "components/shared";
import { ProfileMenu, PostForm } from "components";

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
}) => {
  /* UI States */
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);

  /* Context */
  const { currentUser, userProfile } = useAuth();
  const { languages } = useGlobalData();

  /* Hooks init */
  const history = useHistory();

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

  // Handle login modal
  const handleLoginModal = () =>
    modalHandler(openLoginModal, setOpenLoginModal);

  // Confirm Delete
  const handleDeleteModal = () =>
    modalHandler(openDeleteModal, setOpenDeleteModal);

  // Update form handler
  const handleUpdateFormModal = () =>
    modalHandler(openUpdateForm, setOpenUpdateForm);

  // Delete thought
  const removeThought = () => {
    handleDeleteModal();
    deleteThought(thought?.id)
      .then(() => {
        history.push(`/thoughts/${thought?.language}`);
      })
      .catch();
  };

  // Update page title
  useEffect(() => {
    document.title = thought.title
      ? `${thought.title} by ${thought.author} | devThoughts`
      : "devThoughts";
  }, [thought]);

  /* Auth actions */
  const authActions = [
    { label: "Delete", cta: handleDeleteModal },
    { label: "Edit", cta: handleUpdateFormModal },
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
        />
      </Container>

      {/* Update post modal */}
      {openUpdateForm && (
        <Modal modalHandler={handleUpdateFormModal}>
          <PostForm
            post={postThought}
            currentUser={currentUser}
            languages={languages}
            selectedLanguage={thought?.language || ""}
            postTitle={thought?.title || ""}
            postBody={thought?.body || ""}
            postId={thought?.id}
            formHandler={handleUpdateFormModal}
            updatePost
          />
        </Modal>
      )}

      {/* Confirm delete modal */}
      {openDeleteModal && (
        <Modal modalHandler={handleDeleteModal}>
          <ConfirmDelete
            cta={removeThought}
            thoughtTitle={thought?.title || ""}
          />
        </Modal>
      )}

      {/* Login handler */}
      {openLoginModal && (
        <Modal modalHandler={handleLoginModal}>
          <ProfileMenu info="You need to log in to perform this action" />
        </Modal>
      )}
    </>
  );
};

export default PostView;
