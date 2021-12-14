import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../Alert";
import "./form.css"

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="form-container">
          <h2 className="title">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-input"
                      value={formData.username}
                      onChange={handleChange}
                  />
                </div>
                <div className="form">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-input"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="form">
                  <label>First name</label>
                  <input
                      name="firstName"
                      className="form-input"
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      className="form-input"
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form">
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn submit"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;