import { useContext, createContext, useState, useEffect } from "react";
import { SplashScreen } from "components";
import firebase from "config/firebase";
import { USERS, ROLES } from "config/firebase";
import { getRole } from "helpers";

/* Auth contexxt */
const AuthContext = createContext();

/* Hook for accessing auth context */
export const useAuth = () => useContext(AuthContext);

/* Provider function */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState({});
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);

  /* Get roles */
  const getUserRole = (email) => {
    ROLES.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUserRole(getRole(doc.data(), email));
      });
    });
  };

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
    setUserRole(null);
    return firebase.auth().signOut();
  };

  /* Handle user state */
  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // return unsubscribe;
  }, []);

  /* Load user profile on load */
  useEffect(() => {
    if (currentUser) {
      getUserProfile(currentUser?.uid);
      getUserRole(currentUser?.email);
    }
  }, [currentUser]);

  /* Shared context data */
  const value = {
    currentUser,
    login: loginWithGoogle,
    loginWithGithub,
    createUpdateUserProfile,
    getUserProfile,
    userProfile,
    userRole,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && <SplashScreen />}
      {!loading && children}
    </AuthContext.Provider>
  );
};
