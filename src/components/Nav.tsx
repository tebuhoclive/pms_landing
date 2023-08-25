import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav
      className="uk-navbar-container uk-navbar-transparent uk-padding uk-margin-top uk-flex uk-flex-center"
    >
      <div
        className="uk-navbar"
        style={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between", // Distribute items evenly along the container
          alignItems: "center", // Center items vertically
        }}
      >
        <ul
          className="uk-navbar-nav uk-flex uk-flex-row uk-text-center"
          style={{
            padding: "0 20px",
            paddingRight:'1px',
            margin: 0,
            listStyle: "none",
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start", // Move items to the start (left) of the container
            alignItems: "center", // Center items vertically
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
        <ul className="uk-navbar-nav ">
          <li className="uk-margin-right">
            <Link to="/login">Login</Link>
          </li>
          <li className="uk-margin-right">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
