import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

import { getSession } from './utils/webstorage';

import Home from './Home/containers/home';
import Login from './Login/containers/login';
import Logout from './Login/containers/logout';
import Success from './Login/containers/success';

class App extends Component {
  constructor(props) {
    super(props);

    const { token } = getSession();

    this.loggedIn = token ? true : false;
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <Fragment>
          <Switch>
            <Route path="/" exact render={() => (
              this.loggedIn ? (
                <Home/>
              ) : (
                <Redirect to="/login/"/>
              )
            )} />
            <Route path="/login/" exact component={Login} />
            <Route path="/logout/" exact component={Logout} />
            <Route path="/success" exact component={Success} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
