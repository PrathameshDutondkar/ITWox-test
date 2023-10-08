import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/it-wox-logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.scss";

const Navbar = () => {
  const email = localStorage.getItem("user");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    
    navigate("/");
  };

  const shouldShowNavbar = location.pathname !== "/signin";

  useEffect(() => {
    if (location.pathname === "/") {
      handleSignOut();
    }
  }, [location.pathname]);

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
