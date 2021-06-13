import { useRef, useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { v4 as uuid } from "uuid";

/* Collections */
import { THOUGHTS, INTERACTIONS, LANGUAGES } from "config/firebase";

/* Components */
import { AdminPanel } from "components";
import { Loader } from "components/shared";

const Admin = () => {
  const { userRole } = useAuth();

  /* Local states */
  const postsPerFetch = 3;
  const [posts, setPosts] = useState([]);
  const [lastPostId, setLastPostId] = useState(null);
  const [loading, setLoading] = useState(false);

  /* Add language */
  const addLanguage = (name, displayName) => {
    setLoading(true);
    const id = uuid();
    const data = { id, name, displayName, totalFire: 0, totalPosts: 0 };
    LANGUAGES.doc(id)
      .set(data)
      .then()
      .catch()
      .finally(() => setLoading(false));
  };

  /* Get all thoughts */
  const getAllPosts = useRef(() => {});
  getAllPosts.current = () => {
    setLoading(true);
    const data = [];
    THOUGHTS.orderBy("id")
      .startAfter(lastPostId)
      .limit(postsPerFetch)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setPosts((prev) => (prev ? [...prev, ...data] : data));
        setLastPostId(
          querySnapshot.docs[querySnapshot.docs.length - 1]?.id || null
        );
      })
      .catch()
      .finally(() => setLoading(false));
  };

  /* Respond to post */
  const respondToPost = useRef(() => {});
  respondToPost.current = (
    postId = null,
    response = null,
    deletePost = false
  ) => {
    if (!userRole) return;
    if (!postId) return;

    // if not a delete request
    if (!deletePost) {
      setLoading(true);
      THOUGHTS.doc(postId)
        .set({ verified: response }, { merge: true })
        .then(() => {
          let updatedPosts = posts.map((post) =>
            post.id === postId ? { ...post, verified: response } : post
          );
          setPosts(updatedPosts);
        })
        .catch()
        .finally(() => setLoading(false));
    } else if (deletePost) {
      setLoading(true);
      Promise.all([
        THOUGHTS.doc(postId).delete(),
        INTERACTIONS.doc(postId).delete(),
      ])
        .then(() => {
          let updatedPosts = posts.filter((post) => post.id !== postId);
          setPosts(updatedPosts);
        })
        .catch()
        .finally(() => setLoading(false));
    }
  };

  /* Init page */
  useEffect(() => {
    if (!userRole) return;
    getAllPosts.current();
  }, [getAllPosts, userRole]);

  return (
    <>
      {loading && <Loader />}
      <AdminPanel
        posts={posts}
        userRole={userRole}
        canLoadMore={!!lastPostId}
        loadMoreThoughts={getAllPosts.current}
        respondToPost={respondToPost.current}
        addLanguage={addLanguage}
      />
    </>
  );
};

export default Admin;
