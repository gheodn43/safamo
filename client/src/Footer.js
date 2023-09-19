// Footer.js
import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Về chúng tôi</h3>
              <p>This is the website about motel rooms with the best market in Ngu Hanh Son district, Da Nang city</p>
            </div>

            <div className="footer-section">
              <h3>Liên hệ với chúng tôi</h3>
              <p>Email: pnamhuynhle@gmail.com</p>
              <p>Phone: 0775420232</p>
            </div>
            {/* Add more footer sections as needed */}
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Safamo.com | Rent for you and best choose for everyone
        </div>
      </footer>
  );
};

export default Footer;
