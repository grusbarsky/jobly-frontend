import React, { useState, useContext } from "react";
import Alert from "../Alert";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";
import "./profileform.css"


// allows user to edit profile
// these changes will immediatly be seen around the sute

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);


  const [saveConfirmed, setSaveConfirmed] = useState(false);


  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // reloads information on entire site
    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
      <div className="edit-profile">
        <div className="form-container">
        <div className="form-items">
        <h3>Profile</h3>
        <div className="card">
          <div className="card-body profile-body">
          <form className="profile-form">
              <div className="form edit-form">
                <label>Username</label>
                <p className="form-username">{formData.username}</p>
              </div>
              <div className="form edit-form">
                <label>First Name</label>
                <input
                    name="firstName"
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleChange}
                />
              </div>
              <div className="form edit-form">
                <label>Last Name</label>
                <input
                    name="lastName"
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleChange}
                />
              </div>
              <div className="form edit-form">
                <label>Email</label>
                <input
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div className="form edit-form">
                <label>Confirm password to make changes:</label>
                <input
                    type="password"
                    name="password"
                    className="form-input"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>

              {formErrors.length
                  ? <Alert type="danger" messages={formErrors} />
                  : null}

              {saveConfirmed
                  ?
                  <Alert type="success" messages={["Updated successfully"]} />
                  : null}

              <button
                  className="btn profile-btn"
                  onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default ProfileForm;
