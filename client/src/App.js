import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Slider from './Slider';
import RoomCards from './RoomCards';
import Footer from './Footer';
// import FacebookLoginComponent from "./FacebookLogin"; 
import './style.css';

function App() {
  return (
    // <Router>
      <div>
        <Navbar />
        {/* <Switch> */}
          {/* <Route path="/facebook-login" component={FacebookLoginComponent} /> */}
          {/* <Route exact path="/" component={Slider} /> */}
          {/* ... các route khác ... */}
        {/* </Switch> */}
        <Slider />
        <RoomCards />
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
