import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingNav from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';
import Admin from '../admin/admin-component';
import Progress from '../progress-report/progress-component';
import Login from '../landing-page/login';
import { UserProvider } from '../landing-page/login';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <>
          <LandingNav></LandingNav>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/admin" component={Admin} />
            <Route path="/progress" component={Progress} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;