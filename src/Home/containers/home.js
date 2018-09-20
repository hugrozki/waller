import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './home.css';
import store from '../../store';

import Wall from '../components/wall';
import LogoutButton from '../components/logout-button';
import SettingsButton from '../components/settings-button';
import SettingsModal from '../containers/settings-modal';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSettings: false,
    }
  }

  showSettings = (event) => {
    event.preventDefault();

    this.setState({
      showSettings: true,
    });
  }

  hideSettings = (event) => {
    this.setState({
      showSettings: false,
    });
  }

  render() {
    return (
      <Provider
        store={store}
      >
        <div className='Container'>
          <Wall/>
          <LogoutButton />
          <SettingsButton callback={this.showSettings} />

          { this.state.showSettings &&
            <SettingsModal close={this.hideSettings} />
          }
        </div>
      </Provider>
    );
  }
}

export default Home;
