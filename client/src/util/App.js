// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Front-end/Navbar';
import Slider from '../Front-end/Slider'; 
import RoomCards from '../Front-end/RoomCards';
import Footer from '../Front-end/Footer';
import Login from '../components/Login/Login';
// import AccountManagement from './components/AccountManagement'; 
import RegistrationForm from '../components/Login/Register';
import ForgotPasswordForm from '../components/Login/ForgotPassword';
import '../css/style.css';
import '../bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/forgot-password" component={ForgotPasswordForm} />
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
    {/* <AccountManagement /> */}
  </div>
);

export default App;
