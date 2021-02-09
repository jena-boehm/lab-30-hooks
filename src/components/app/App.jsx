import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Detail from '../details/Detail';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />} />
            <Route 
              path="/character/:name"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
