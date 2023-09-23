import React from 'react';
import '../css/style.css';
import sliderImage from '../img/hh1_1632716401.jpg'; // Thay đổi đường dẫn tới hình ảnh

const Slider = () => {
  return (
    <div className="slider-container">
        <div className="slider">
          <img src={sliderImage} alt="slider1" />
          <div className="text">WELCOME TO SAFAMO WEBSITE</div>
          <div className="search-container">
            <input type="text" placeholder="Nhập địa chỉ, Khu vực sinh sống, Zip code" id="search-box-input" />
            <button id="search-button">Search</button>
          </div>
        </div>
      </div>
  );
};

export default Slider;
