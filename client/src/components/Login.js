// Login.js
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import RegistrationForm from './Register';
// import FacebookLoginComponent from './FacebookLogin'; 
// import GmailLoginComponent from './GmailLoginComponent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  // const [loggedInWithFacebook, setLoggedInWithFacebook] = useState(false); 
  // const [loggedInWithGmail, setLoggedInWithGmail] = useState(false); // State to track if logged in with Gmail

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Code này để link tới các link
  const handleRegisterClick = () => {
    setShowRegistrationForm(!showRegistrationForm);
    window.location.href = 'http://localhost:3000/register';
  };

  
  const handleForgotPassword = () => {
    setShowForgotPasswordForm(true);
    window.location.href = 'http://localhost:3000/forgot-password';
    
  };

  const handleSigninClick = () => {
    window.location.href = 'http://localhost:3000';
    
  };

  
  return (

    // Code tạo form login
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
      
      {/* Mấy cái em comment mà cục cục thì để đó do em để sẵn sau chèn chức năng sau vào sẽ cần dùng */}

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
<Link to="/register">Don't have an account?</Link>
        
      </div>

      {showRegistrationForm && (
        /* Render your registration form here */
        <div className="registration-form">
           <RegistrationForm />
          {/* Include your registration form components and logic here */}
        </div>
      )}
    </form>
  );
}

export default Login;
