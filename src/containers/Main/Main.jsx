import { useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import {} from "contexts/AuthContext"

/* Collections */
import { LANGUAGES, THOUGHTS, INTERACTIONS, USERS } from "config/firebase";

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
  const [thoughtInteractions, setThoughtInteractions] = useState({});
  const [loading, setLoading] = useState(false);

  /* Loading handler */
  const handleLoading = useCallback((state) => {
    if (state !== true) {
      const backdrop = document.getElementById("backdrop");
      if (backdrop) backdrop.style.animation = "fadeOut 0.5s";
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
      querySnapshot.forEach((doc) =>
        setActiveThought((prev) => ({ ...prev, ...doc.data() }))
      );
      handleLoading(false);
    });
  }, [postId, handleLoading]);

  /* Get interactions */
  const getThoughtInteractions = useCallback(() => {
    INTERACTIONS.where("id", "==", postId).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) =>
        setThoughtInteractions((prev) => ({ ...prev, ...doc.data() }))
      );
    });
  }, [postId]);

  /* Post new thought */
  const postThought = useCallback(
    (fieldsData, uid) => {
      const id = uuid();
      const date = new Date();

      const postData = {
        ...fieldsData,
        date,
        id,
        verified: true,
      };

      const interactionsData = {
        id,
        fire: 0,
      };

      THOUGHTS.doc(id)
        .set(postData)
        .then(() => getThoughts())
        .catch((e) => console.log(e));

      INTERACTIONS.doc(id)
        .set(interactionsData)
        .catch((e) => console.log(e));

      USERS.doc(uid)
    },
    [getThoughts]
  );

  /* Update thought */
  const updateThought = useCallback(
    (data, id, manageLoading = false) => {
      manageLoading && handleLoading(true);
      THOUGHTS.doc(id)
        .set({ ...data }, { merge: true })
        .then()
        .catch((e) => console.log(e))
        .finally(() => manageLoading && handleLoading(false));
    },
    [handleLoading]
  );

  /* Update interactions */
  const updateInteractions = useCallback((id, data) => {
    INTERACTIONS.doc(id)
      .set({ ...data }, { merge: true })
      .catch((e) => console.log(e));
  }, []);

  /* Init fetch */
  useEffect(() => {
    getLanguages();
    if (!postId) getThoughts();
    else {
      getActiveThought();
      getThoughtInteractions();
    }
  }, [
    getLanguages,
    getThoughts,
    postId,
    getActiveThought,
    getThoughtInteractions,
  ]);

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
        updateThought={updateThought}
        thoughtInteractions={thoughtInteractions}
        updateInteractions={updateInteractions}
      />
    </>
  );
};

export default Main;
