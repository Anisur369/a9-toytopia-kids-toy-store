import React, { useState, use } from "react";
import { AuthContext } from "../context/AuthContext";
//redirect import react router dom & react
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { ResetPassword } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPassword(email);
    // redirect to gmail
    // window.location.href = "https://mail.google.com";
    // redirect to gmail method 2
    window.location.replace("https://mail.google.com");
  };

  return (
    <div className="min-h-[80vh] from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-blue-100 shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">
          Reset password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your registered email, we will send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email."
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full font-bold">
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          Remember password?
          <a href="/login" className="text-sm text-blue-600 hover:underline">
            Return to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
