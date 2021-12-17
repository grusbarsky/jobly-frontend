import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./homepage.css"


function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
      <div className="homepage">
        <div className="container text-center">
          <h1>Jobly</h1>
          {currentUser
              ? <h2>
                Welcome, {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn btn-primary m-2"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary m-2"
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
