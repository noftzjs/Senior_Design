import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import './App.css';
import NavBar from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
    </React.Fragment>
  );
}
export default App;