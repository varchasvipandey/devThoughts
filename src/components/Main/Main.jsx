import { useState } from "react";
import { modalHandler as operateModal } from "helpers";
import Wrapper from "./Main.styles";

import { useAuth } from "contexts/AuthContext";
import { useGlobalData } from "contexts/GlobalDataContext";

/* Components */
import { SideNav, Thoughts, Hot, PostForm, PostView } from "components";
import { FloatButton, Modal } from "components/shared";

const Main = ({
  selectedLanguage = "javascript",
  thoughts = [],
  postThought = () => {},
  postId = "",
  activeThought = {},
  updateThought = () => {},
  thoughtInteractions = {},
  updateInteractions = () => {},
  deleteThought = () => {},
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => operateModal(modalOpen, setModalOpen);

  /* User context */
  const { currentUser, userProfile } = useAuth();

  /* Global data context */
  const { languages } = useGlobalData();

  return (
    <Wrapper>
      {/* Add new thought */}
      {currentUser && (
        <FloatButton
          label="+"
          style={{ right: "4rem", bottom: "2rem" }}
          cta={modalHandler}
        />
      )}

      {/* Flex: 1/3 ---> SideNav */}
      <div className="sidenav" id="sidenav">
        <SideNav defaultSelected={selectedLanguage} options={languages} />
      </div>

      {/* Flex: 2/3 ---> Content */}
      <div className="content">
        {/* Flex 1/2 ---> Posts */}
        {!postId && (
          <Thoughts thoughts={thoughts} selectedLanguage={selectedLanguage} />
        )}
        {postId && (
          <PostView
            thought={activeThought}
            thoughtInteractions={thoughtInteractions}
            updateInteractions={updateInteractions}
            deleteThought={deleteThought}
            postThought={postThought}
          />
        )}

        {/* Flex: 2/2 ---> Hot */}
        <Hot />
      </div>

      {/* Add new Modal */}
      {modalOpen && (
        <Modal modalHandler={modalHandler}>
          <PostForm
            post={postThought}
            currentUser={currentUser}
            userPostIds={userProfile?.postIds}
            formHandler={modalHandler}
            languages={languages}
            selectedLanguage={selectedLanguage}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Main;
