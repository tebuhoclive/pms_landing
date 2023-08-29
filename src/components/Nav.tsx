import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className="uk-navbar-container uk-navbar-transparent uk-padding uk-flex uk-flex-center">
      <div
        className="uk-navbar"
        style={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Main Menu */}
        <ul
          className="uk-navbar-nav uk-flex uk-flex-row uk-text-center uk-margin-remove-bottom" // Remove bottom margin for mobile
          style={{
            padding: "0 20px",
            paddingRight: "1px",
            margin: 0,
            listStyle: "none",
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <li className="uk-margin-right">
            <Link to="/" className="uk-logo">
              <img src="./lotswhite.png" alt="Logo" width="80" height="40" />
            </Link>
          </li>
          <li className="uk-margin-right">
            <Link to="/">About</Link>
          </li>
          <li className="uk-margin-right">
            <Link to="/testimonies">Functions</Link>
          </li>
          <li className="uk-margin-right">
            <Link to="/testimonies">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <label htmlFor="mobile-toggle" className="uk-margin-remove-bottom">
          <span
            className="uk-icon uk-navbar-toggle-icon"
            uk-navbar-toggle-icon=""
          ></span>
        </label>
        <input id="mobile-toggle" type="checkbox" className="uk-hidden" />

        {/* Mobile Menu */}
        <div
          className="uk-navbar-dropdown"
          style={{ backgroundColor: "white", borderRadius: "30px" }}
        >
          <ul className="uk-nav uk-navbar-dropdown-nav">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/testimonies">Functions</Link>
            </li>
            <li>
              <Link to="/testimonies">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
