import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useContext(AuthContext); // ✅ useContext ব্যবহার করো

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then(() => {
        // ✅ input field clear করার জন্য state reset
        setEmail("");
        setPassword("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log("Login error:", error.code, error.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-8 mb-10"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="fieldset-legend text-2xl font-bold mx-auto">
          Login
        </h2>

        <label className="label">Email</label>
        <input
          value={email} // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label">Password</label>
        <input
          value={password} // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Password"
          required
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </fieldset>
    </form>
  );
}

export default Login;
