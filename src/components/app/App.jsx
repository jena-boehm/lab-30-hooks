import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import DetailPage from '../../containers/DetailPage';

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
            component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
