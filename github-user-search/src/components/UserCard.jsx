const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h3>{user.login}</h3>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
