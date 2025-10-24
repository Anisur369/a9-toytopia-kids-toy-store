12;

import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";

export default function Register() {
  const { createUser } = use(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    return hasUppercase && hasLowercase;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setError(
        "Password must contain at least one lowercase letter and one uppercase letter"
      );
      return;
    }
    createUser(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}
