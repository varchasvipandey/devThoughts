import { useState } from "react";
import Wrapper from "./Main.styles";

/* Components */
import { SideNav, Thoughts, Hot, PostForm, PostView } from "components";
import { FloatButton, Modal } from "components/shared";

const Main = ({
  selectedLanguage = "javascript",
  languages = [],
  thoughts = [],
  postThought = () => {},
  postId = "",
  activeThought = {},
  updateThought = () => {},
  thoughtInteractions = {},
  updateInteractions = () => {},
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    if (modalOpen === true) {
      const backdrop = document.getElementById("backdrop");
      if (backdrop) backdrop.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        setModalOpen((prev) => !prev);
      }, 500);
    } else setModalOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      {/* Add new thought */}
      <FloatButton
        label="+"
        style={{ right: "4rem", bottom: "2rem" }}
        cta={modalHandler}
      />

      {/* Add new Modal */}
      {modalOpen && (
        <Modal modalHandler={modalHandler}>
          <PostForm post={postThought} />
        </Modal>
      )}

      {/* Flex: 1/3 ---> SideNav */}
      <div className="sidenav fixed">
        <SideNav defaultSelected={selectedLanguage} options={languages} />
      </div>
      {/* Flex: 2/3 ---> Content */}
      {!postId && (
        <Thoughts thoughts={thoughts} selectedLanguage={selectedLanguage} />
      )}
      {postId && (
        <PostView
          thought={activeThought}
          thoughtInteractions={thoughtInteractions}
          updateInteractions={updateInteractions}
        />
      )}
      {/* Flex: 3/3 ---> Hot */}
      <Hot />
    </Wrapper>
  );
};

export default Main;
