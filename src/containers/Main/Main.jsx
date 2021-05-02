import { useEffect, useState, useCallback } from "react";

/* Collections */
import { LANGUAGES, THOUGHTS } from "config/firebase";

/* Components */
import { Main as MainComponent } from "components";

const Main = ({ match }) => {
  const selectedLanguage = match?.params?.language;

  const [languages, setLanguages] = useState([]);
  const [thoughts, setThoughts] = useState([]);

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
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setThoughts(data);
      });
  }, [selectedLanguage]);

  useEffect(() => {
    getLanguages();
    getThoughts();
  }, [getLanguages, getThoughts]);

  return (
    <MainComponent
      selectedLanguage={selectedLanguage}
      languages={languages}
      thoughts={thoughts}
    />
  );
};

export default Main;
