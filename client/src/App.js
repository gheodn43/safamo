// Import necessary components and styles
import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider'; 
import RoomCards from './RoomCards';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './style.css';
import './bootstrap/dist/css/bootstrap.min.css';

// Other code

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} /> {/* Route for Login */}
          <Route exact path="/" component={Home} /> {/* Route for Home */}
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
    {/* Add other components for home as needed */}
  </div>
);

export default App;
