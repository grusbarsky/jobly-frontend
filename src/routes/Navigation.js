import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css"

// Nav bar
// if not logged in, shows login and register
// if logged in, shows links to navigate site

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
    );
  }

  function loggedOutNav() {
    return (
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink aria-current="page" className="nav-link active" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
    );
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light px-2 d-flex justify-content-between border-bottom shadow-sm">
        <Link className="navbar-brand fw-bold" to="/">
          Jobly
        </Link>
        <div>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
      </nav>
  );
}

export default Navigation;
