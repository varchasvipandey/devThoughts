import { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";

/* Collections */
import { THOUGHTS, INTERACTIONS, USERS } from "config/firebase";

/* Components */
import { Main as MainComponent } from "components";
import { Loader } from "components/shared";

const Main = ({ match, handleSidenav = () => {} }) => {
  /* Params */
  const selectedLanguage = match?.params?.language || "devthoughts";
  const postId = match?.params?.postId;

  /* Data states */
  const [thoughts, setThoughts] = useState([]);
  const [activeThought, setActiveThought] = useState({});
  const [thoughtInteractions, setThoughtInteractions] = useState({});
  const [topRatedThoughts, setTopRatedThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Loading handler */
  const handleLoading = useCallback((state) => {
    console.log("loading", state);
    if (state !== true) {
      const backdrop = document.getElementById("backdrop");
      if (backdrop) backdrop.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        setLoading(state);
      }, 500);
    } else setLoading(state);
  }, []);

  /* Get all thoughts based on selected language */
  const getThoughts = useCallback(() => {
    console.log("getthoughts");
    handleLoading(true);
    const data = [];
    THOUGHTS.where("language", "==", selectedLanguage)
      .where("verified", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setThoughts(data);
        handleLoading(false);
      })
      .catch((e) => {
        console.log(e);
        handleLoading(false);
      });
  }, [selectedLanguage, handleLoading]);

  /* Get top rated thoughts */
  const getTopRatedThoughts = useCallback(async () => {
    const data = [];
    INTERACTIONS.where("varified", "==", true)
      .orderBy("fire")
      .limit(3)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((interactionDoc) =>
          THOUGHTS.where("id", "==", interactionDoc.data().id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((postDoc) =>
                data.push({
                  ...postDoc.data(),
                  fire: interactionDoc.data()?.fire,
                })
              );
              setTopRatedThoughts(data);
            })
        );
      });
  }, []);

  /* Get active thought */
  const getActiveThought = useCallback(() => {
    console.log("getActiveThought");
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
    console.log("getActiveThought Interaction");
    INTERACTIONS.where("id", "==", postId).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) =>
        setThoughtInteractions((prev) => ({ ...prev, ...doc.data() }))
      );
    });
  }, [postId]);

  /* Post new thought */
  const postThought = useCallback(
    (fieldsData, uid, postId = null, verified = true) => {
      console.log("postThought");
      const id = postId || uuid();
      console.log("uuid", id);
      const date = new Date();

      const postData = {
        ...fieldsData,
        date,
        id,
        verified,
        uid,
      };

      // Remove date from data if post is under going an update
      if (postId) delete postData.date;

      const interactionsData = {
        id,
        fire: 0,
      };

      THOUGHTS.doc(id)
        .set({ ...postData }, { merge: true })
        .then(() => getThoughts())
        .catch((e) => console.log(e));

      /* If post is new, then only initialize interactions */
      !postId &&
        INTERACTIONS.doc(id)
          .set(interactionsData)
          .catch((e) => console.log(e));
    },
    [getThoughts]
  );

  /* Update interactions */
  const updateInteractions = useCallback(
    (postId, data, uid, userLikedPosts) => {
      console.log("updateInteractions");
      INTERACTIONS.doc(postId)
        .set({ ...data }, { merge: true })
        .catch((e) => console.log(e));

      // -- Update user's liked posts
      let updatedLikedPosts = [];

      // If userLikedPosts exists
      if (userLikedPosts) {
        // check for this post
        const indexOfThisPost = userLikedPosts.indexOf(postId);
        if (indexOfThisPost >= 0) {
          updatedLikedPosts = [...userLikedPosts];
          updatedLikedPosts.splice(indexOfThisPost, 1);
        } else updatedLikedPosts = [...userLikedPosts, postId];
      } else {
        updatedLikedPosts = [postId];
      }

      USERS.doc(uid)
        .set({ likedPosts: updatedLikedPosts }, { merge: true })
        .catch((e) => console.log(e));
    },
    []
  );

  /* Delete thought */
  const deleteThought = useCallback((postId) => {
    console.log("deleteThought");
    return Promise.all([
      THOUGHTS.doc(postId).delete(),
      INTERACTIONS.doc(postId).delete(),
    ]);
  }, []);

  /* Init fetch */
  useEffect(() => {
    if (!postId) {
      getThoughts();
      getTopRatedThoughts();
    } else {
      getActiveThought();
      getThoughtInteractions();
    }
  }, [
    getThoughts,
    postId,
    getActiveThought,
    getThoughtInteractions,
    getTopRatedThoughts,
  ]);

  return (
    <>
      {loading && <Loader />}
      <MainComponent
        selectedLanguage={selectedLanguage}
        thoughts={thoughts}
        topRatedThoughts={topRatedThoughts}
        postThought={postThought}
        postId={postId}
        activeThought={activeThought}
        thoughtInteractions={thoughtInteractions}
        updateInteractions={updateInteractions}
        deleteThought={deleteThought}
        handleSidenav={handleSidenav}
      />
    </>
  );
};

export default withRouter(Main);
