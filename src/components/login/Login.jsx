import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "./../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          className="border"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          className="border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
      <p>
        Already have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

export default Login;
