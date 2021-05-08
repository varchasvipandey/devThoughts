import { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import Container from "./ProfileMenu.styles";

// Images
import moonSVG from "images/moon.svg";
import sunSVG from "images/sun.svg";
import googleSVG from "images/google.svg";

// Components
import ThemeHandler from "./ThemeHandler/ThemeHandler";
import LoginHandler from "./LoginHandler/LoginHandler";

const ProfileMenu = ({ themeHandler = () => {} }) => {
  // UI State
  const [themeIcon, setThemeIcon] = useState(sunSVG);

  /* Theme handler */
  const toggleTheme = () => {
    themeHandler();
    themeIcon === moonSVG ? setThemeIcon(sunSVG) : setThemeIcon(moonSVG);
  };

  /* Icon handler for theme */
  useEffect(() => {
    setThemeIcon(
      localStorage.getItem("devThoughts-theme") === "dark" ? moonSVG : sunSVG
    );
  }, []);

  /* Context */
  const { currentUser, login, logout } = useAuth();

  // Login handler
  const googleLoginHandler = async () => {
    try {
      await login();
    } catch {}
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await logout();
    } catch {}
  };

  // Login methods
  const loginMethods = [
    {
      handler: googleLoginHandler,
      icon: googleSVG,
      label: "Log in with Google",
    },
  ];

  return (
    <Container>
      {/* Theme handler */}
      <ThemeHandler toggleTheme={toggleTheme} themeIcon={themeIcon} />

      {/* Login handler */}
      {!currentUser && <LoginHandler loginMethods={loginMethods} />}

      {/* Logout handler */}
      {currentUser && <button onClick={handleLogout}>Logout</button>}
    </Container>
  );
};

export default ProfileMenu;
