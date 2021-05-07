import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthProvider } from "contexts/AuthContext";

/* Containers */
import { Main, Admin } from "containers";

/* Components */
import { Navbar } from "components";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  const container = useRef();

  const [theme, setTheme] = useState(["default-theme"]);

  const themeHandler = () => {
    const classes = Array.from(container.current.classList);

    if (!classes.includes("dark-theme"))
      localStorage.setItem("devThoughts-theme", "dark");
    else localStorage.setItem("devThoughts-theme", "default");

    container.current.classList.toggle("dark-theme");
  };

  /* Defualt theme setter */
  useEffect(() => {
    const defaultTheme = localStorage.getItem("devThoughts-theme");
    if (defaultTheme === "dark") setTheme((prev) => [...prev, "dark-theme"]);
  }, []);

  return (
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
  );
};

export default App;
