import { useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

/* Collections */
import { LANGUAGES, THOUGHTS } from "config/firebase";

/* Components */
import { Main as MainComponent } from "components";

const Main = ({ match }) => {
  /* Params */
  const selectedLanguage = match?.params?.language;
  const postId = match?.params?.postId;

  /* Data states */
  const [languages, setLanguages] = useState([]);
  const [thoughts, setThoughts] = useState([]);
  const [activeThought, setActiveThought] = useState({});

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
    const data = [];
    THOUGHTS.where("language", "==", selectedLanguage)
      .where("verified", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setThoughts(data);
      });
  }, [selectedLanguage]);

  /* Get active thought */
  const getActiveThought = useCallback(() => {
    THOUGHTS.where("id", "==", postId).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => setActiveThought(doc.data()));
    });
  }, [postId]);

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
    <MainComponent
      selectedLanguage={selectedLanguage}
      languages={languages}
      thoughts={thoughts}
      postThought={postThought}
      postId={postId}
      activeThought={activeThought}
    />
  );
};

export default Main;
