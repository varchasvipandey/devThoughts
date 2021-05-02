import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    /* Singup */
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Log in</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handlerSubmit}>
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />

        <button disabled={loading} type="submit">
          login in
        </button>
      </form>

      <p>
        Dont have an account? <Link to="/signup">sign up</Link>
      </p>
    </div>
  );
}

export default Login;
