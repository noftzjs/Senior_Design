import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingNav from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';
import admin from '../admin/admin-component';
import login from '../landing-page/login/login';
import Login from '../landing-page/login/login';

function App() {
  return (
    <BrowserRouter>
    <div>
    <LandingNav></LandingNav>
            <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/admin" component={admin} />
              <Route path="/login" component={Login} />
            <Route component={Error}/>
           </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;