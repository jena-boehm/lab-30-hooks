import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Detail from '../details/Detail';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={HomePage} />
          <Route
            path="/character/:name"
            exact
            component={Detail} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
