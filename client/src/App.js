import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Landing from './users/containers/Landing';
import Quiz from './containers/Quiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/quiz" exact>
          <Quiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
