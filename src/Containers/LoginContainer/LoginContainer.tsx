import React from "react";
import "./LoginContainer.css";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button className="primary">Log In</button>
      <a className="forgot-password">Forgot password?</a>
      <button className="secondary">Create Account</button>
    </div>
  );
};

export default LoginContainer;
