import { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import Container from "./ProfileMenu.styles";

// Images
import moonSVG from "images/moon.svg";
import sunSVG from "images/sun.svg";
import googleSVG from "images/google.svg";
import githubSVG from "images/github.svg";

// Components
import ThemeHandler from "./ThemeHandler/ThemeHandler";
import LoginHandler from "./LoginHandler/LoginHandler";
import LogoutHandler from "./LogoutHandler/LogoutHandler";
import UserProfile from "./UserProfile/UserProfile";

const ProfileMenu = ({ themeHandler = null }) => {
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
  const {
    currentUser,
    login,
    loginWithGithub,
    createUpdateUserProfile,
    userProfile,
    logout,
  } = useAuth();

  // Login handler
  const googleLoginHandler = () => {
    login()
      .then(({ user: { email, displayName, uid, photoURL } }) => {
        createUpdateUserProfile(uid, displayName, email, photoURL);
      })
      .catch((e) => console.log(e));
  };

  const githubLoginHandler = async () => {
    try {
      await loginWithGithub();
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
      active: true,
    },
    {
      handler: githubLoginHandler,
      icon: githubSVG,
      label: "Log in with Github",
      active: false,
    },
  ];

  return (
    <Container>
      {/* Theme handler */}
      {themeHandler && (
        <ThemeHandler toggleTheme={toggleTheme} themeIcon={themeIcon} />
      )}

      {/* Login handler */}
      {!currentUser && <LoginHandler loginMethods={loginMethods} />}

      {/* User Profile */}
      <UserProfile currentUser={currentUser} userProfile={userProfile} />

      {/* Logout handler */}
      {currentUser && <LogoutHandler cta={handleLogout} />}
    </Container>
  );
};

export default ProfileMenu;
