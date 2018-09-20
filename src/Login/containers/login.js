import React, { Component } from 'react';
import AccessButton from '../components/access-button';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <AccessButton text="Acceder con Instagram"/>
      </div>
    );
  }
}

export default Login;