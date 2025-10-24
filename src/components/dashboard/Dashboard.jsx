import { use } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = use(AuthContext);

  return (
    <div>
      <h1>This is a Dashboard Page</h1>
      <p>Username: {user ? user.email : "No user"}</p>
    </div>
  );
}
export default Dashboard;
