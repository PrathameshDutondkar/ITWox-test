import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/it-wox-logo.svg";
import "./navbar.scss";

const Navbar = () => {
  const email = localStorage.getItem("user");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const shouldShowNavbar = location.pathname !== "/signin";

  return shouldShowNavbar ? (
    <nav className="navbar-container">
      <span>
        <img src={logo} alt="IT WOX Logo" />
      </span>
      <span className="menu-container">
        <li key="Get help with research" className="tab-li">
          {email ? (
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
