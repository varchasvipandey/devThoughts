import { Switch, Route, Redirect } from "react-router-dom";

/* Containers */
import { Main, Admin } from "containers";

const Routes = ({ handleSidenav = () => {} }) => {
  return (
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
      >
        <Main handleSidenav={handleSidenav} />
      </Route>

      {/* Admin Panel */}
      <Route exact path="/admin" component={Admin} />
    </Switch>
  );
};

export default Routes;
