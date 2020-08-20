import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import Welcome from './view/welcome';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route component={() => (
          <div className="ejemplo">
            <h1>error 404</h1>
            <span> pagina no encontrada</span>
          </div>
        )}
        />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
