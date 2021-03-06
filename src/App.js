import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import { AuthProvider } from "contexts/AuthContext";
import { GlobalDataProvider } from "contexts/GlobalDataContext";

/* Routes */
import Routes from "Routes";

/* Components */
import { Navbar } from "components";

/* Logos */
import logoLight from "images/logo-light.svg";
import logoDark from "images/logo-dark.svg";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  /* UI ref */
  const container = useRef();

  /* UI States */
  const [theme, setTheme] = useState([
    "system-spacing",
    "area-spacing",
    "default-theme",
  ]);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  /* Handle sidenav on resize */
  const handleResize = () => {
    const sidenav = document.getElementById("sidenav");
    if (!sidenav) return;
    if (window.innerWidth >= 1201) {
      sidenav.style.position = "relative";
      sidenav.style.left = "0%";
    } else {
      sidenav.style.position = "absolute";
      sidenav.style.left = "-100%";
    }

    if (window.innerWidth <= 1200) setMobileView(true);
    else setMobileView(false);
  };

  /* Handle sidenav*/
  const handleSidenav = () => {
    if (!mobileView) return;
    setSidenavOpen((prev) => {
      const sidenav = document.getElementById("sidenav");
      if (!sidenav) return;
      sidenav.style.left = !prev ? "0%" : "-100%";
      return !prev;
    });
  };

  /* Handle favicon */
  const faviconHandler = useRef(() => {});
  faviconHandler.current = (mode) => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = mode === "dark" ? logoDark : logoLight;
  };

  /* Handle theme */
  const themeHandler = () => {
    const classes = Array.from(container.current.classList);

    if (!classes.includes("dark-theme")) {
      localStorage.setItem("devThoughts-theme", "dark");
      faviconHandler.current("dark");
    } else {
      localStorage.setItem("devThoughts-theme", "default");
      faviconHandler.current("default");
    }

    container.current.classList.toggle("dark-theme");
  };

  /* Defualt theme setter */
  useEffect(() => {
    const defaultTheme = localStorage.getItem("devThoughts-theme");
    if (defaultTheme === "dark") {
      setTheme((prev) => [...prev, "dark-theme"]);
      faviconHandler.current("dark");
    } else faviconHandler.current("default");
  }, []);

  /* Read window width */
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth <= 1200 ? setMobileView(true) : setMobileView(false);
  }, []);

  return (
    <GlobalDataProvider>
      <AuthProvider>
        <Container className={theme.join(" ")} ref={container}>
          <Navbar
            themeHandler={themeHandler}
            sidenavOpen={sidenavOpen}
            handleSidenav={handleSidenav}
          />
          <main>
            <Routes handleSidenav={handleSidenav} />
          </main>
        </Container>
      </AuthProvider>
    </GlobalDataProvider>
  );
};

export default App;
