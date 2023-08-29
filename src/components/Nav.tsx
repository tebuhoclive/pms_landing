import React from "react";
import { Link } from "react-router-dom";

const SignupLinkStyles = {
  marginTop: "10px",
  marginRight: "10px",
  width: "190px",
  height: "48px",
  flexShrink: 0,
  borderRadius: "15px",
  border: "4px solid #EB1717",
  background: "rgba(255, 255, 255, 0.00)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: "#EB1717",
  fontWeight: "bold",
  fontSize: "16px",
};
const NavLinkStyles = {
  color: "#000",
  fontFamily: "Lato",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "150%" /* 31.5px */,
  letterSpacing: "-0.462px",
  width: "104px",
  height: "25px",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};

const Nav: React.FC = () => {
  return (
    <nav
      className="uk-navbar-container uk-navbar-transparent uk-padding uk-flex uk-flex-center"
      uk-navbar=""
    >
      <div
        className="uk-navbar uk-width-1-1"
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
        {/* Logo and Mobile Menu Toggle */}
        <ul
          className="uk-navbar-nav uk-flex uk-flex-row uk-text-center uk-margin-remove-bottom uk-width-1-1"
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
          <li className="uk-margin-right uk-hidden@m">
            <label htmlFor="mobile-toggle">
              <span
                className="uk-icon uk-navbar-toggle-icon"
                uk-navbar-toggle-icon=""
              ></span>
            </label>
            <input id="mobile-toggle" type="checkbox" className="uk-hidden" />

            {/* Mobile Menu */}
            <div className="uk-navbar-dropdown uk-width-1-1">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <Link to="/" style={NavLinkStyles}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/testimonies" style={NavLinkStyles}>
                    Functions
                  </Link>
                </li>
                <li>
                  <Link to="/testimonies" style={NavLinkStyles}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/login" style={NavLinkStyles}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" style={SignupLinkStyles}>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Logo */}
          <li className="uk-margin-right">
            <Link to="/" className="uk-logo">
              <img src="./lotswhite.png" alt="Logo" width="80" height="40" />
            </Link>
          </li>
        </ul>

        {/* Desktop Navigation */}
        <ul className="uk-navbar-nav uk-visible@m ">
          <li className="uk-margin-left">
            <Link to="/" style={NavLinkStyles}>About</Link>
          </li>
          <li className="uk-margin-left">
            <Link to="/testimonies" style={NavLinkStyles}>Functions</Link>
          </li>
          <li className="uk-margin-left">
            <Link to="/testimonies" style={NavLinkStyles}>ContactUs</Link>
          </li>
          <li className="uk-margin-right">
            <Link to="/login" style={NavLinkStyles}>Login</Link>
          </li>
          <Link to="/signup" style={SignupLinkStyles}>
            Signup Now
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
