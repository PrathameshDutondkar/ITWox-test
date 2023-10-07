import React from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <span className="menu-container">
        <li key="Get help with research" className="tab-li">
          <Link to="/signin" className="tab">
            Signin
          </Link>
        </li>
        <li key="get help with notice" className="tab-li">
          <Link to="/dashboard" className="tab">
            Dashboard
          </Link>
        </li>
      </span>
      <span className="signout-button">
        <button> signout</button>
      </span>
    </div>
  );
};

export default Navbar;
