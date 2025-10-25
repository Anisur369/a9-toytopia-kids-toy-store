import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [eyeIcon, setEyeIcon] = useState(false);
  const { createUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const notify = () =>
    toast(
      "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter."
    );

  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setEyeIcon(!eyeIcon);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const minSix = password.length >= 6;
    return hasUppercase && hasLowercase && minSix;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      notify();
      setError(
        "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter."
      );
      return;
    }
    createUser(formData.email, formData.password)
      .then((userCredential) => {
        const notification = () => toast.success("Registration successful!");
        notification();
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formData.fullName,
          photoURL: formData.photoURL,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-md">
      {/* ===== Sign Up Form ===== */}
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <ToastContainer />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="input input-bordered w-full"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="photoURL"
          placeholder="Profile Photo URL"
          className="input input-bordered w-full"
          value={formData.photoURL}
          onChange={handleChange}
          required
        />
        <div className="relative">
          <input
            type={eyeIcon ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {eyeIcon ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>

      <button
        onClick={handleGoogleLogin}
        className="btn mt-4 w-full mx-auto p-4 bg-white text-black border-[#e5e5e5]"
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
