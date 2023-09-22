// Login.js
import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
// import FacebookLoginComponent from './FacebookLogin'; 
// import GmailLoginComponent from './GmailLoginComponent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  // const [loggedInWithFacebook, setLoggedInWithFacebook] = useState(false); 
  // const [loggedInWithGmail, setLoggedInWithGmail] = useState(false); // State to track if logged in with Gmail
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission goes here
    // ...

    // Redirect to home page after login
    history.push('/');
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
    window.location.href = 'http://localhost:3000/login/register';
  };

  
  const handleForgotPassword = () => {
    setShowForgotPasswordForm(true);
    window.location.href = 'http://localhost:3000/login/forgot-password';
    
  };

  const handleSigninClick = () => {
    window.location.href = 'http://localhost:3000';
    
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
      <div className="sign-in" onClick={handleSigninClick}>
      <button className="submit-button" type="submit">
        Sign In
      </button>
      </div>
{/* 
      <GmailLoginComponent setLoggedInWithFacebook={setLoggedInWithGmail} /> */}


      {/* <FacebookLoginComponent setLoggedInWithFacebook={setLoggedInWithFacebook} />

      {loggedInWithFacebook && (
        <div className="facebook-login-info">
        <p>You are logged in with Facebook.</p>
      </div>
      )} */}

      

<div className="forgot-password-link" onClick={handleForgotPassword}>
        <span>Forgot Password?</span>
      </div>

      {showForgotPasswordForm && (
        /* Render your registration form here */
        <div className="forgot-password-form">
          {/* Include your registration form components and logic here */}
        </div>
      )}

<div className="register-link" onClick={handleRegisterClick}>
        <span>Don't have an account? </span>
      </div>

      {showRegistrationForm && (
        /* Render your registration form here */
        <div className="registration-form">
          {/* Include your registration form components and logic here */}
        </div>
      )}
    </form>
  );
}

export default Login;
