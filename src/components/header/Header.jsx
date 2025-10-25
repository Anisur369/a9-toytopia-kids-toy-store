import { NavLink, Link } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "./../context/AuthContext";
import "./header.css";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-full container flex  mx-auto pr-4">
        <div className="navbar-start">
          <div className="dropdown">
            <Link
              to="/"
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </Link>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ToyTopia</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>

            {/* <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-4">
              <div className="relative group inline-block">
                {/* Profile Image */}
                <Link to="/profile">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full cursor-pointer shadow-emerald-300 shadow-md"
                  />
                </Link>

                {/* Hover Name */}
                <Link
                  to="/profile"
                  className="absolute left-[-42px] top-10 bg-gray-100 text-sm font-medium px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  {user.displayName}
                </Link>
              </div>
              <a onClick={handleSignOut} className="btn">
                Sign Out
              </a>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
