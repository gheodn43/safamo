import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

const Navbar = ({ isLoggedIn }) => {
  const handleLogoClick = () => {
    // Thực hiện chuyển hướng về trang home khi nhấn vào logo
    window.location.href = 'http://localhost:3000/'; // Thay '#home' bằng đường dẫn trang home của bạn
  };
  
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Đăng nhập</Link>
        </li>
      </ul>
    </nav>
  );
}
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
    </div>
  );

};
export default Navbar;