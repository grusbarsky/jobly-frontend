import React from "react";
import "./alert.css"

// show alerts

function Alert({ type = "danger", messages = [] }) {

  return (
      <div className={`alert`} role="alert">
        {messages.map(error => (
            <p className="alert-text" key={error}>
              {error}
            </p>
        ))}
      </div>
  );
}

export default Alert;