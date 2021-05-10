import { useContext, createContext, useState, useEffect } from "react";
import { SplashScreen } from "components";
import firebase from "config/firebase";
import { USERS } from "config/firebase";

/* Auth contexxt */
const AuthContext = createContext();

/* Hook for accessing auth context */
export const useAuth = () => {
  return useContext(AuthContext);
};

/* Provider function */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);

  /* Get user profile */
  const getUserProfile = (uid) => {
    USERS.where("uid", "==", uid).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) =>
        setUserProfile((prev) => ({ ...prev, ...doc.data() }))
      );
    });
  };

  /* Create update user profile */
  const createUpdateUserProfile = (uid, displayName, email, photoURL) => {
    const data = { uid, displayName, email, photoURL };
    return USERS.doc(uid).set({ ...data }, { merge: true });
  };

  /* Log in with Google */
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  /* Log in with Github */
  const loginWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  /* Log out */
  const logout = () => {
    setUserProfile({});
    return firebase.auth().signOut();
  };

  /* Handle user state */
  useEffect(() => {
    setLoading(true);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("State changed");

      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  /* Load user profile on load */
  useEffect(() => {
    currentUser && getUserProfile(currentUser?.uid);
  }, [currentUser]);

  /* Shared context data */
  const value = {
    currentUser,
    login: loginWithGoogle,
    loginWithGithub,
    createUpdateUserProfile,
    getUserProfile,
    userProfile,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && <SplashScreen />}
      {!loading && children}
    </AuthContext.Provider>
  );
};
