import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <p>Logged in as: {currentUser?.email}</p>
      <p>Verified: {currentUser?.emailVerified}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Dashboard;
