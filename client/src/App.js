import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import RoomCards from "./RoomCards";
import Footer from "./Footer";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Login";


function App() {
  return (
    <div>

      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route path="/login" Component={Login}/>
        </Switch>
        </div>
      </Router>

      <Slider />
      <RoomCards />
      <Footer />
    </div>
  );
}

export default App;