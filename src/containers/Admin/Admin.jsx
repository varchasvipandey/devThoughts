import { AdminPanel } from "components";
import { useAuth } from "contexts/AuthContext";

const Admin = () => {
  const { currentUser, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
    } catch {}
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {}
  };

  const showUser = () => {
    console.log(currentUser);
    console.log(currentUser?.displayName);
    console.log(currentUser?.email);
    console.log(currentUser?.uid);
    console.log(currentUser?.photoURL);
  };

  return (
    <>
      <button style={{ marginTop: "8rem" }} onClick={handleLogin}>
        Google Login
      </button>
      <button onClick={handleLogout}>Sign Out</button>
      <button onClick={showUser}>Show current User</button>
      <AdminPanel />
    </>
  );
};

export default Admin;
