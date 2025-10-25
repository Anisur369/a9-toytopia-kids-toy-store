import React, { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

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

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log("Login error:", error.code, error.message);
      });
  };

  return (
    <div className="mx-auto mt-8 mb-10 fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
      <title>Toytopia Login</title>
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box border p-4"
      >
        <h2 className="fieldset-legend text-2xl font-bold mx-auto">Login</h2>

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
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
      <button
        onClick={handleGoogleLogin}
        className="btn mt-4 w-[92%] mx-auto p-4 bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
