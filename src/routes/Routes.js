import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profile/ProfileForm";
import SignupForm from "../auth/SignupForm";
import ProtectedRoute from "./ProtectedRoute";


function JoblyRoutes({ login, signup }) {

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <ProtectedRoute exact path="/companies">
            <CompanyList />
          </ProtectedRoute>

          <ProtectedRoute exact path="/jobs">
            <JobList />
          </ProtectedRoute>

          <ProtectedRoute exact path="/companies/:handle">
            <CompanyDetail />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <ProfileForm />
          </ProtectedRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default JoblyRoutes;
