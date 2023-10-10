import React, { useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/it-wox-logo.svg";
import { useAuth } from "../../context/AuthContext";

import "react-toastify/dist/ReactToastify.css";
import "./navbar.scss";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowNavbar = location.pathname !== "/signin";

  const handleSignOut = useCallback(() => {
    signOut();
    navigate("/");
  }, [signOut, navigate]);

  useEffect(() => {
    if (location.pathname === "/") {
      handleSignOut();
    }
  }, [location.pathname, handleSignOut]);

  return shouldShowNavbar ? (
    <nav className="navbar-container">
      <span>
        <img src={logo} alt="IT WOX Logo" />
      </span>
      <span className="menu-container">
        <li key="Get help with research" className="tab-li">
          {user ? (
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
          ) : (
            <Link to="/signin">
              <button className="sign-in-button">Sign In</button>
            </Link>
          )}
        </li>
      </span>
    </nav>
  ) : null;
};

export default Navbar;
