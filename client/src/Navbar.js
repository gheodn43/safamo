import React from 'react';
import './style.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './components/Login';

const Navbar = ({ isLoggedIn }) => {
  const handleLogoClick = () => {
    window.location.href = 'http://localhost:3000/';
  };
  const handleSigninClick = () => {
    window.location.href = 'http://localhost:3000/login';
  };

  // const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  // const toggleAccountDropdown = () => {
  //   setIsAccountDropdownOpen(!isAccountDropdownOpen);
  // };

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
      <div className="logo" onClick={handleSigninClick}>
      <Link to="/login">Sign In</Link>
      </div>
      {/* <div className="account-dropdown">
        <button onClick={toggleAccountDropdown}>Account</button>
        {isAccountDropdownOpen && (
          <div className="dropdown ">
            <div class="dropbtn">
            <Link to='/Profile'>Profile</Link>
            <Link to='/my-room'>My Room</Link>
            <Link to='/finding-room'>Finding Room</Link>
            <Link to='/shared'>Shared</Link>
            <Link to='/about'>About</Link>
            <Link to='/logout'>Logout</Link>
          </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
