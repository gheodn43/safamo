// RoomCards.js
import React from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import room1 from './img/hh1_1632716401.jpg';
import room2 from './img/hh2_1632716407.jpg';
import room3 from './img/z3362480429968-e7d46d5407eaabb7f518f912e5c80763_1650730635.jpg';
import room4 from './img/hh5_1632716410.jpg';


const RoomCards = () => {
  return (
    <div className="container">
        <section className="favorite-rooms">
          <h2>Phòng được ưa thích nhất</h2>
          <div className="room-card">
            <img src={room1} alt="Room 1" />
            <h5>Phòng 1</h5>
            <p>Phòng rộng, thoáng, view đẹp.</p>
          </div>

          <div className="room-card">
            <img src={room2} alt="Room 2" />
            <h5>Phòng 2</h5>
            <p>Phòng tiện nghi, giá hợp lý.</p>
          </div>
          {/* Add more room cards as needed */}
        </section>

        <section className="available-rooms">
          <h2>Phòng đang trống</h2>
          <div className="room-card">
            <img src={room3} alt="Room 3" />
            <h5>Phòng 3</h5>
            <p>Phòng gần trường, an ninh tốt.</p>
          </div>

          <div className="room-card">
            <img src={room4} alt="Room 4" />
            <h5>Phòng 4</h5>
            <p>Phòng mới, nội thất đầy đủ.</p>
          </div>
          {/* Add more room cards as needed */}
        </section>
      </div>

  );
};

export default RoomCards;
