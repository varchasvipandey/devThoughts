import { useContext, createContext, useState, useEffect } from "react";
import { LANGUAGES } from "config/firebase";

/* Global data context */
const GlobalDataContext = createContext();

/* Access hook */
export const useGlobalData = () => useContext(GlobalDataContext);

/* Provider */
export const GlobalDataProvider = ({ children }) => {
  const [languages, setLanguages] = useState([]);
  const [infoSections, setInfoSections] = useState([]);

  /* Fetch languages and update state */
  useEffect(() => {
    const restricted = [];
    const open = [];

    LANGUAGES.orderBy("name").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (!doc.data()?.isPrivate) open.push(doc.data());
        else restricted.push(doc.data());
      });

      setInfoSections(restricted);
      setLanguages(open);
    });
  }, []);

  const value = {
    infoSections,
    languages,
  };

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};
