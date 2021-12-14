import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../Alert";
import "./form.css"


function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
 

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
      <div className="LoginForm">
        <div className="form-container">
          <div className="form-items">
          <h3 className="title">Log In</h3>
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
                    autoComplete="username"
                    required
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
                    autoComplete="current-password"
                    required
                  />
                </div>

                {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null}

                <button className="btn submit" onSubmit={handleSubmit}>Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginForm;
