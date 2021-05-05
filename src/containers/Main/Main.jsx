import { useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

/* Collections */
import { LANGUAGES, THOUGHTS } from "config/firebase";

/* Components */
import { Main as MainComponent } from "components";
import { Loader } from "components/shared";

const Main = ({ match }) => {
  /* Params */
  const selectedLanguage = match?.params?.language || "javascript";
  const postId = match?.params?.postId;

  /* Data states */
  const [languages, setLanguages] = useState([]);
  const [thoughts, setThoughts] = useState([]);
  const [activeThought, setActiveThought] = useState({});
  const [loading, setLoading] = useState(false);

  /* Loading handler */
  const handleLoading = useCallback((state) => {
    if (state !== true) {
      const backdrop = document.getElementById("backdrop");
      backdrop.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        setLoading((prev) => !prev);
      }, 500);
    } else setLoading((prev) => !prev);
  }, []);

  /* Get list of programming languages */
  const getLanguages = useCallback(() => {
    const data = [];
    LANGUAGES.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => data.push(doc.data()));
      setLanguages(data);
    });
  }, []);

  /* Get all thoughts based on selected language */
  const getThoughts = useCallback(() => {
    handleLoading(true);
    const data = [];
    THOUGHTS.where("language", "==", selectedLanguage)
      .where("verified", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setThoughts(data);
        handleLoading(false);
      });
  }, [selectedLanguage, handleLoading]);

  /* Get active thought */
  const getActiveThought = useCallback(() => {
    handleLoading(true);
    setActiveThought({});
    THOUGHTS.where("id", "==", postId).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => setActiveThought(doc.data()));
      handleLoading(false);
    });
  }, [postId, handleLoading]);

  /* Post new thought */
  const postThought = useCallback(
    (fieldsData) => {
      const id = uuid();
      const date = new Date();

      const data = {
        ...fieldsData,
        date,
        id,
        verified: true,
        fire: 0,
      };

      THOUGHTS.doc(id)
        .set(data)
        .then(() => getThoughts())
        .catch((e) => console.log(e));
    },
    [getThoughts]
  );

  /* Init fetch */
  useEffect(() => {
    getLanguages();
    !postId ? getThoughts() : getActiveThought();
  }, [getLanguages, getThoughts, postId, getActiveThought]);

  return (
    <>
      {loading && <Loader />}
      <MainComponent
        selectedLanguage={selectedLanguage}
        languages={languages}
        thoughts={thoughts}
        postThought={postThought}
        postId={postId}
        activeThought={activeThought}
      />
    </>
  );
};

export default Main;
