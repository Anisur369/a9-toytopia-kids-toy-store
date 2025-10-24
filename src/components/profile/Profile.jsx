import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div>
      <h1>This is a Profile Page</h1>
      <p>Username: {user ? user.email : "No user"}</p>

      <a onClick={handleSignOut} className="btn">
        Sign Out
      </a>
    </div>
  );
};

export default Profile;
