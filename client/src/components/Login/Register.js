import React, { useState } from 'react';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    address: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

// Đây là code để khi nhấn vào submit sẽ chuyển trang về lại trang login
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    window.location.href = 'http://localhost:3000/login'; //Chú ý dòng này vì dòng này sẽ chuyển trang về login
  };

  return (

    // Đây là code cái form đki
    <form className="registration-form" onSubmit={handleSubmit}>
        <span className="login-title">Register Form</span>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="form-group">
  <label htmlFor="dateOfBirth">Date of Birth:</label>
  <input
    type="date"
    name="dateOfBirth"
    value={formData.dateOfBirth}
    onChange={handleChange}
  />
</div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>

      <div className="form-group">
  <label htmlFor="phone">Phone:</label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    onKeyDown={(e) => {
      const isNumber = /^[0-9]+$/.test(e.key);
      if (!isNumber && e.key !== 'Backspace') {
        e.preventDefault();
      }
    }}
  />
</div>



      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </div>

      <div className="sign-in" onClick={handleSubmit}>
      <button className="submit-button" type="submit">
        Submit
      </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
