// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider'; 
import RoomCards from './RoomCards';
import Footer from './Footer';
import Login from './components/Login';
import AccountManagement from './components/AccountManagement'; // Import the Account Management component

import './style.css';
import './bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Navbar/>
    <Slider />
    <RoomCards/>
    <Footer/>
    <AccountManagement /> {/* Display account management on the home page */}
  </div>
);

export default App;
