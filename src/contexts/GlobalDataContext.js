import { useContext, createContext, useState, useEffect } from "react";
import { LANGUAGES } from "config/firebase";

/* Global data context */
const GlobalDataContext = createContext();

/* Access hook */
export const useGlobalData = () => useContext(GlobalDataContext);

/* Provider */
export const GlobalDataProvider = ({ children }) => {
  const [languages, setLanguages] = useState([]);

  /* Fetch languages and update state */
  useEffect(() => {
    const data = [];
    LANGUAGES.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => data.push(doc.data()));
      setLanguages(data);
    });
  }, []);

  const value = {
    languages,
  };

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};
