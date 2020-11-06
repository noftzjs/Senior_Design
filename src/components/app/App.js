import React from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
=======
import NavBar from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';
import login from '../login/loginapp'

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      <login></login>
    </React.Fragment>
>>>>>>> Stashed changes
  );
}

export default App;
