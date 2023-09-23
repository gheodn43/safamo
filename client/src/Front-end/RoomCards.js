import React from 'react';
import '../css/style.css';
import room1 from '../img/hh1_1632716401.jpg';
import room2 from '../img/hh2_1632716407.jpg';
import room3 from '../img/z3362480429968-e7d46d5407eaabb7f518f912e5c80763_1650730635.jpg';
import room4 from '../img/hh5_1632716410.jpg';
import '../bootstrap/dist/css/bootstrap.min.css';
import MapContainer from './MapContainer';

const RoomCards = () => {
  return (
    <div className="container">
      <section className="favorite-rooms">
        <h1 className="chu">Room for You</h1>
        <div className="row">
          <div className="col-md-3 room-card">
            <img src={room1} alt="Room 1" className="img-fluid" />
            <h5>Room 1 <i className="fa fa-heart" /></h5>
            <p>Spacious room, well-ventilated, beautiful view.</p>
          </div>

          <div className="col-md-3 room-card">
            <img src={room2} alt="Room 2" className="img-fluid" />
            <h5>Room 2 <i className="fa fa-heart" /></h5>
            <p>Well-furnished room, reasonable price.</p>
          </div>

          <div className="col-md-3 room-card">
            <img src={room3} alt="Room 3" className="img-fluid" />
            <h5>Room 3 <i className="fa fa-heart" /></h5>
            <p>Close to school, good security.</p>
          </div>

          <div className="col-md-2 room-card">
            <img src={room4} alt="Room 4" className="img-fluid" />
            <h5>Room 4 <i className="fa fa-heart" /></h5>
            <p>New room, fully furnished.</p>
          </div>
        </div>
      </section>

      {/* Shared Rooms Section */}
      <section className="shared-rooms">
        <h1 className="chu">Shared Rooms</h1>
        <div className="row">
          {/* Add shared room cards here */}
          <div className="col-md-3 room-card">
            <img src={room1} alt="Shared Room 1" className="img-fluid" />
            <h5>Shared Room 1 <i className="fa fa-heart" /></h5>
            <p>Comfortable shared room, friendly atmosphere.</p>
          </div>

          <div className="col-md-3 room-card">
            <img src={room2} alt="Shared Room 2" className="img-fluid" />
            <h5>Shared Room 2 <i className="fa fa-heart" /></h5>
            <p>Cozy shared room, great roommates.</p>
          </div>

          <div className="col-md-3 room-card">
            <img src={room3} alt="Shared Room 3" className="img-fluid" />
            <h5>Shared Room 3 <i className="fa fa-heart" /></h5>
            <p>Cozy shared room, great roommates.</p>
          </div>

          <div className="col-md-2 room-card">
            <img src={room4} alt="Shared Room 4" className="img-fluid" />
            <h5>Shared Room 4 <i className="fa fa-heart" /></h5>
            <p>Cozy shared room, great roommates.</p>
          </div>

          {/* Add more shared room cards as needed */}
        </div>
      </section>
     {/* Google Maps Section */}
     <section className="google-maps">
        <h2 className="chu">Google Maps - Ngũ Hành Sơn, Đà Nẵng</h2>
        <MapContainer />
      </section>
    
    </div>
  );
};

export default RoomCards;
