import React from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";

const Navbar= () => {
  const email = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <span className="menu-container">
        <li key="Get help with research" className="tab-li">
          {email ? (
            <div className="tab" onClick={handleSignOut}>
              Sign Out
            </div>
          ) : (
            <Link to="/signin" className="tab">
              Sign In
            </Link>
          )}
        </li>
      </span>
    </div>
  );
};

export default Navbar;
