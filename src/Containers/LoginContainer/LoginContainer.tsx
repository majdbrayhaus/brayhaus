import React from "react";
import "./LoginContainer.css";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <button className="google">
        <img src="https://developers.google.com/identity/images/g-logo.png" />
        Continue with Google
      </button>
    </div>
  );
};

export default LoginContainer;
