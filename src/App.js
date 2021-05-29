import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthProvider } from "contexts/AuthContext";
import { GlobalDataProvider } from "contexts/GlobalDataContext";

/* Containers */
import { Main, Admin } from "containers";

/* Components */
import { Navbar } from "components";

/* Logos */
import logoLight from "images/logo-light.svg";
import logoDark from "images/logo-dark.svg";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  const container = useRef();

  const [theme, setTheme] = useState(["default-theme"]);

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

  return (
    <GlobalDataProvider>
      <AuthProvider>
        <Container className={theme.join(" ")} ref={container}>
          <Navbar themeHandler={themeHandler} />
          <main>
            <Router>
              <Switch>
                {/* Default route */}
                <Route exact path={"/"}>
                  <Redirect to="/thoughts" />
                </Route>

                {/* Thoughts */}
                <Route
                  exact
                  path={[
                    "/thoughts",
                    "/thoughts/:language",
                    "/thoughts/:language/:postId",
                  ]}
                  component={Main}
                />

                {/* Admin Panel */}
                <Route exact path="/admin" component={Admin} />
              </Switch>
            </Router>
          </main>
        </Container>
      </AuthProvider>
    </GlobalDataProvider>
  );
};

export default App;
