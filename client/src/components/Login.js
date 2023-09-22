import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission goes here
    // ...
  };

  const handleGoogleLogin = () => {
    // Your logic to handle Google sign in goes here
    // ...
  };
  const handleFacebookLogin = () => {
    
  };

  const handleForgotPassword = () => {
    // Your logic to handle forgot password goes here
    // ...
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="login-title">Login Form</span>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="submit-button" type="submit">
        Sign In
      </button>

      <button className="google-button" onClick={handleGoogleLogin}>
        Sign In with Google
        <span className="fa fa-google"></span>
      </button>
      <button className="facebook-button" onClick={handleFacebookLogin}>
        Sign In with facebook
        <span className="fa fa-facebook"></span>
      </button>
      <p className="forgot-password">
  <a href="#sign-in" onClick={handleForgotPassword}>
    Forgot Password
  </a>
</p>

    </form>
  );
}
export default Login