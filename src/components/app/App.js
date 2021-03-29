import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingNav from '../nav/navbar';
import LandingPage from '../landing-page/landing-page';
import Admin from '../admin/admin-component';
import Progress from '../progress-report/progress-component';
import Login from '../landing-page/login';
import { AuthContext } from '../../providers/AuthContext';

function App() {

  const [username, setUsername] = useState(null)
  const [isLoggedin, setIsLoggedin] = useState(false)

  const providerValue = useMemo(() => ({
     username, setUsername,
     isLoggedin, setIsLoggedin
    }), [username, isLoggedin]);

  return (
    <AuthContext.Provider value={providerValue}>
      <BrowserRouter>
        <>
          <LandingNav></LandingNav>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            {/* <Route path="/admin" component={Admin} /> */}
            <Route path="/progress" component={Progress} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;