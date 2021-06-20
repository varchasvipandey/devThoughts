import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./__ref-contexts/__ref-AuthContext";

function PrivateRoutes({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoutes;