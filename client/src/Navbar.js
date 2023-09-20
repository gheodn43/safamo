import React from 'react';
import './style.css';
import logo from './img/logo.png';
// import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const handleLogoClick = () => {
    // Thực hiện chuyển hướng về trang home khi nhấn vào logo
    window.location.href = 'http://localhost:3000/'; // Thay '#home' bằng đường dẫn trang home của bạn
  };

  return (
    <div className="navbar">
      <a href="#rent">Rent</a>
      <a href="#shared-accommodation">Shared Accommodation</a>
      <a href="#agent-finder">Agent Finder</a>
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <a href="#manage-rentals">Manage Rentals</a>
      <a href="#favourite">Favourite</a>
      <a href="#sign-in">Sign in</a>
      {/* <Link to="./Login.js">Sign In</Link> Chuyển đến trang đăng nhập */}
    </div>
  );
};

export default Navbar;
