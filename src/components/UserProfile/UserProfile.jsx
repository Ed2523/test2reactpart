import PropTypes from "prop-types";
import "./UserProfile.sass";

const UserProfile = ({ user }) => {
  return (
    <div className='user-section'>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      {user.email && <p>Email: {user.email}</p>}
      <p>Role: {user.role}</p>
    </div>
  );
};

UserProfile.PropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
