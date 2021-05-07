import Container from "./ProfileMenu.styles";

const ProfileMenu = ({
  themeHandler = () => {},
  login = () => {},
  logout = () => {},
  currentUser = null,
}) => {
  return (
    <Container>
      <button onClick={themeHandler}>Toggle Theme</button>
    </Container>
  );
};

export default ProfileMenu;
