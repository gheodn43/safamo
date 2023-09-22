// AccountManagement.js
import React, { useState } from 'react';

const AccountManagement = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user information as needed
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Your logic to handle logout goes here
    // ...
  };

  return (
    <div className="account-management">
      <div onClick={toggleDropdown} className="account-toggle">
        <button>{user.name}</button>
        <span>&#9662;</span>
      </div>
      {dropdownVisible && (
        <div className="dropdown-content">
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          {/* Add more user information as needed */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
