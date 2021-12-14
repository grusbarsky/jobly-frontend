import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./homepage.css"


function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
      <div className="Homepage">
        <div className="homepage-container">
          <h1 className="logo">Jobly</h1>
          {currentUser
              ? <h2>
                Welcome, {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )}
        </div>
      </div>
  );
}

export default Homepage;
