import React from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/it-wox-logo.svg"

const Navbar = () => {
  const email = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <span> <img src={logo} alt="logo"/></span>
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
    </div>
  );
};

export default Navbar;
