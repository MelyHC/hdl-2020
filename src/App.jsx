import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import Welcome from './view/welcome';
import Err from './view/Err';
import Login from './view/Login';
import Register from './view/Register';
import Profile from './view/Profile';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path='/login' exac component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='*' component={Err} />

      </Switch>
    </HashRouter>
  </Router>
);

export default App;
