import Container from "./UserProfile.styles";

const UserProfile = ({ currentUser }) => {
  console.log({ currentUser });
  return (
    <Container>
      {/* Profile image */}
      <div className="profile-image">
        <img src={currentUser?.photoURL} alt={currentUser?.displayName} />
      </div>

      {/* Profile info */}
      <div className="profile-info">
        <p className="profile-info__displayName">{currentUser?.displayName}</p>
        <p className="profile-info__email">{currentUser?.email}</p>
      </div>
    </Container>
  );
};

export default UserProfile;
