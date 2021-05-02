import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Containers */
import { Main } from "containers";

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
    <Container className={theme.join(" ")} ref={container}>
      <Navbar themeHandler={themeHandler} />
      <main>
        <Router>
          <Route
            exact
            path={["/", "/:language", "/:language/:postId"]}
            component={Main}
          />
        </Router>
      </main>
    </Container>
  );
};

export default App;
