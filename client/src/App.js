import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import RoomCards from "./RoomCards";
import Footer from "./Footer";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';




function App() {
  return (
    <div>
      <Navbar />
      
      <Slider />
      <RoomCards />
      <Footer />
    </div>
  );
}

export default App;
