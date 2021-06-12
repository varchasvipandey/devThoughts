const getRole = (roles, email) => {
  // Is owner
  if (roles?.owner === email) return "owner";

  // Is admin
  if (roles?.admins?.includes(email)) return "admin";

  // Is Moderator
  if (roles?.moderators?.includes(email)) return "moderator";

  // else user
  return null;
};

export default getRole;
