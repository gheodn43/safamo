import React from 'react';
import './style.css';
import FacebookLoginComponent from "./FacebookLogin.js";
import logo from './img/logo.png'; // Import hình ảnh
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#rent">Rent</a>
      <a href="#shared-accommodation">Shared Accommodation</a>
      <a href="#agent-finder">Agent Finder</a>
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Sử dụng biến chứa đường dẫn hình ảnh */}
      </div>
      <a href="#manage-rentals">Manage Rentals</a>
      <a href="#profile">Profile</a>
      <div className="dropdown">
        <button className="dropbtn">Tài khoản</button>
        <div className="dropdown-content">
          <a href="#profile">Profile</a>
          <a href="#settings">Settings</a>
          <a href="#login"><FacebookLoginComponent/></a>
          <a href="#guess">Guess</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;