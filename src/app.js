import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import PiskelClone from './components/piskel-сlone/PiskelClone';
import LandingPage from './components/landing-page/LandingPage';


class App extends Component {
  render() {
    return (
      <div style={{ height: '90%' }}>
        <Router>
          <Header
            changeDisplayedItem={this.changeDisplayedItem}
            onServiceChange={this.onServiceChange}
          />
          <Switch>
            <Route path="/landing" component={LandingPage} />
            <Route path="/piskel-clone" component={PiskelClone} />
            <Redirect exact from="/" to="/landing" />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
