import React, { useState } from 'react';
import './Login.css';

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
    otp: ''  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Code này để tích hợp API mã OTP vào 
    const sendOtpViaEmail = async (email, otp) => {
    console.log('Sending OTP via email:', otp);
  
    // Make an API call to backend to send the OTP via email
   
    // Anh Tuấn coi kỹ đoạn này nha cái url á em push lên anh lấy về add vào thử giúp em
    const response = await fetch('your_backend_url/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
  
    if (response.ok) {
      console.log('OTP sent successfully to email.');
    } else {
      console.error('Failed to send OTP via email.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a random OTP and include it in the form data
    const otp = Math.floor(100000 + Math.random() * 900000);
    setFormData({ ...formData, otp });

    // Log the generated OTP
    console.log('Generated OTP:', otp);

    await sendOtpViaEmail(formData.email, otp);


    console.log('OTP sent successfully. Redirect to verify OTP page.');
    
    // Sau khi bấm submit sẽ trả về trang Login
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <form className="forgot-password-form" onSubmit={handleSubmit}>
      <span className="login-title">Reset Password</span>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </div>
      
      <div className="form-group">
        <label htmlFor="otp">OTP:</label>
        <input type="text" name="otp" value={formData.otp} disabled />
      </div>

      <div className="sign-in" onClick={handleSubmit}>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
