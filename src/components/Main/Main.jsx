import { useState } from "react";
import Wrapper from "./Main.styles";

/* Components */
import { SideNav, Thoughts, Hot } from "components";
import { FloatButton, Modal } from "components/shared";

const Main = ({
  selectedLanguage = "javascript",
  languages = [],
  thoughts = [],
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const addHandler = () => setModalOpen(true);

  return (
    <Wrapper>
      {/* Add new thought */}
      <FloatButton
        label="+"
        style={{ right: "4rem", bottom: "2rem" }}
        cta={addHandler}
      />

      {/* Add new Modal */}
      {modalOpen && <Modal setState={setModalOpen}></Modal>}

      {/* Flex: 1/3 ---> SideNav */}
      <SideNav defaultSelected={selectedLanguage} options={languages} />
      {/* Flex: 2/3 ---> Content */}
      <Thoughts thoughts={thoughts} />
      {/* Flex: 3/3 ---> Hot */}
      <Hot />
    </Wrapper>
  );
};

export default Main;
