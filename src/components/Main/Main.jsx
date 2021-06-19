import { useState } from "react";
import { useHistory } from "react-router-dom";
import { modalHandler } from "helpers";
import Wrapper from "./Main.styles";

import { useAuth } from "contexts/AuthContext";
import { useGlobalData } from "contexts/GlobalDataContext";

/* Components */
import {
  SideNav,
  Thoughts,
  Hot,
  PostForm,
  PostView,
  ProfileMenu,
} from "components";
import { FloatButton, Modal } from "components/shared";
import ConfirmDelete from "components/PostView/ConfirmDelete";

const Main = ({
  selectedLanguage = "javascript",
  thoughts = [],
  topRatedThoughts = [],
  postThought = () => {},
  postId = "",
  activeThought = {},
  thoughtInteractions = {},
  updateInteractions = () => {},
  deleteThought = () => {},
  handleSidenav = () => {},
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [updateFormProps, setUpdateFormProps] = useState({});

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteModalProps, setDeleteModalProps] = useState({});

  /* Hooks init */
  const history = useHistory();

  /* Add new form modal handler */
  const addNewFormModalHandler = () => modalHandler(modalOpen, setModalOpen);

  // Handle login modal
  const handleLoginModal = () =>
    modalHandler(openLoginModal, setOpenLoginModal);

  // Update form handler
  const handleUpdateFormModal = (props) => {
    setUpdateFormProps(props);
    modalHandler(openUpdateForm, setOpenUpdateForm);
  };

  // Confirm Delete
  const handleDeleteModal = (props) => {
    setDeleteModalProps(props);
    modalHandler(openDeleteModal, setOpenDeleteModal);
    // setOpenAuthActionMenu(false);
  };

  // Delete thought
  const removeThought = (thought) => {
    handleDeleteModal();
    deleteThought(thought?.id)
      .then(() => {
        history.push(`/thoughts/${thought?.language}`);
      })
      .catch();
  };

  /* User context */
  const { currentUser, userProfile, userRole } = useAuth();

  /* Global data context */
  const { languages, infoSections } = useGlobalData();

  return (
    <Wrapper>
      {/* Add new thought */}
      {currentUser && (
        <FloatButton
          label="+"
          style={{
            right: "2rem",
            bottom: "2rem",
          }}
          cta={addNewFormModalHandler}
        />
      )}

      {/* Flex: 1/3 ---> SideNav */}
      <div className="sidenav" id="sidenav">
        <SideNav
          defaultSelected={selectedLanguage}
          options={languages}
          privateOptions={infoSections}
          handleSidenav={handleSidenav}
        />
      </div>

      {/* Flex: 2/3 ---> Content */}
      <div className="content">
        {/* Flex 1/2 ---> Posts */}
        {!postId && (
          <Thoughts
            thoughts={thoughts}
            selectedLanguage={selectedLanguage}
            addNewFormModalHandler={addNewFormModalHandler}
          />
        )}
        {postId && (
          <PostView
            thought={activeThought}
            thoughtInteractions={thoughtInteractions}
            updateInteractions={updateInteractions}
            handleUpdateFormModal={handleUpdateFormModal}
            handleDeleteModal={handleDeleteModal}
            handleLoginModal={handleLoginModal}
          />
        )}

        {/* Flex: 2/2 ---> Hot */}
        <Hot topRatedThoughts={topRatedThoughts} />
      </div>

      {/* //-- MODALS */}

      {/* Add new Modal */}
      {modalOpen && (
        <Modal modalHandler={addNewFormModalHandler}>
          <PostForm
            post={postThought}
            currentUser={currentUser}
            userPostIds={userProfile?.postIds}
            userRole={userRole}
            formHandler={addNewFormModalHandler}
            languages={languages}
            selectedLanguage={selectedLanguage}
          />
        </Modal>
      )}

      {/* Update Post modal */}
      {openUpdateForm && (
        <Modal modalHandler={handleUpdateFormModal}>
          <PostForm
            {...updateFormProps}
            post={postThought}
            currentUser={currentUser}
            languages={languages}
            formHandler={handleUpdateFormModal}
            userRole={userRole}
            updatePost
          />
        </Modal>
      )}

      {/* Confirm delete modal */}
      {openDeleteModal && (
        <Modal modalHandler={handleDeleteModal}>
          <ConfirmDelete
            cta={() =>
              removeThought({
                id: deleteModalProps?.thoughtId,
                language: deleteModalProps?.thoughtLanguage,
              })
            }
            thoughtTitle={deleteModalProps?.thoughtTitle || ""}
          />
        </Modal>
      )}

      {/* Login handler */}
      {openLoginModal && (
        <Modal modalHandler={handleLoginModal}>
          <ProfileMenu info="You need to log in to perform this action" />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Main;
