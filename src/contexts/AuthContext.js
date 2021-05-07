import { useContext, createContext, useState, useEffect } from "react";
import { SplashScreen } from "components";
import firebase from "config/firebase";

/* Auth contexxt */
const AuthContext = createContext();

/* Hook for accessing auth context */
export const useAuth = () => {
  return useContext(AuthContext);
};

/* Provider function */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const logout = () => {
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

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && <SplashScreen />}
      {!loading && children}
    </AuthContext.Provider>
  );
};
