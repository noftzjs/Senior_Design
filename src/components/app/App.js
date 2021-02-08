import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingNav from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';
import Admin from '../admin/admin-component';
import Progress from '../progress-report/progress-component';

function App() {
  return (
    <BrowserRouter>
    <div>
    <LandingNav></LandingNav>
            <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/admin" component={Admin} />
              <Route path="/progress" component={Progress} />
            <Route component={Error}/>
           </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;