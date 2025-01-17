import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Link class="navbar-brand fs-1 fst-italic" to="/">
        GoFood
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li>
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          </li>
          <li>
          <Link className="nav-item nav-link" to="/login">
            Login
          </Link>
          </li>
          <li>
          <Link className="nav-item nav-link" to="/createuser">
            SignUp
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
