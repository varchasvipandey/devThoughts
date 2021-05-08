import Container from "./LoginHandler.styles";
import LoginMethod from "./LoginMethod";

const LoginHandler = ({ loginMethods = [] }) => {
  return (
    <Container>
      <div className="login-handler">
        {/* Title */}
        <div className="login-handler__title">
          <hr />
          <p>Join Now</p>
          <hr />
        </div>

        {/* Options */}
        {loginMethods?.map((method, i) => (
          <LoginMethod key={i} method={method} />
        ))}

        {/* Message */}
        <p className="login-handler__message">
          Interact with thoughts and post your own thoughts by logging in!
        </p>
      </div>
    </Container>
  );
};

export default LoginHandler;
