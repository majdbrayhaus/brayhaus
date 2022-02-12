import React from "react";
import "./LoginContainer.css";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <p>Email</p>
      <input />
      <p>Password</p>
      <input />
      <button className="primary">Log In</button>
      <button className="secondary">Create Account</button>
    </div>
  );
};

export default LoginContainer;
