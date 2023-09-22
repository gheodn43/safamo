import React from 'react';
import './style.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './components/Login';
// import AccountManagement from './components/AccountManagement';

const Navbar = ({ isLoggedIn }) => {
  const handleLogoClick = () => {
    window.location.href = 'http://localhost:3000/';
  };
  const handleSigninClick = () => {
    window.location.href = 'http://localhost:3000/login';
  };


  return (
    <div className="navbar">
      <Link to='/rent'>Rent</Link>
      <Link to='/shared-accommodation'>Shared Accommodation</Link>
      <Link to='/agent-finder'>Agent Finder</Link>
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <Link to='/manage-rentals'>Manage Rentals</Link>
      <Link to='/favourite'>Favourite</Link>
      <div className="sign-in" onClick={handleSigninClick}>
      <Link to="/login">Sign In</Link>
      {/* <ul>
        <li><AccountManagement /></li> 
      </ul> */}
      </div>
    </div>
  );
};

export default Navbar;
