import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import Welcome from './view/Welcome';
import Err from './view/Err';
import Login from './view/Login';
import Register from './view/Register';
import Profile from './view/Profile';
import Home from './view/Home';
import Dashboard from './view/Dashboard';
import Consultations from './view/Consultations';
import './App.css';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/home' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/consultations' component={Consultations} />
        <Route path='*' component={Err} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
