import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getSettings, setSettings } from '../../utils/webstorage';
import api from '../../utils/api';
import actions from '../../actions';

import './settings-modal.css';

class SettingsModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      hashtag: '',
      queryType: '',
      status: ''
    }
  }

  componentDidMount(){
    const { hashtag, queryType } = getSettings();

    this.setState({
      hashtag,
      queryType
    });
  }

  setType = (event) => {
    const hashtag = event.target.value === 'recentuser' ? '' : this.state.hashtag;

    this.setState({
      queryType: event.target.value,
      hashtag
    });

  }

  setHashtag = (event) => {
    this.setState({
      hashtag: event.target.value
    });
  }

  save = async (event) => {
    const { hashtag, queryType } = this.state;

    if (queryType === 'recenthashtag' && !hashtag) {
      this.setState({ status: 'Falta valor hashtag.' });
      return false;
    }

    const isSave = setSettings({ hashtag, queryType });
    if (isSave) this.setState({ status: 'Ajustes guardados.' });

    // get recent media
    const posts = await api.recent();

    if (posts.length > 0) {
      this.props.newFeed(posts);
    }
  }

  render() {
    return (
      <div className="ModalWrapper">
        <div className="Modal">
          <div
            className="Close"
            onClick={this.props.close}
          >
            <i className="fas fa-times-circle"></i>
          </div>
          <h3>Ajustes</h3>
          <hr/>
          <div className="Input">
            <label htmlFor="type">Feed</label>
            <select id="type" value={this.state.queryType} onChange={this.setType}>
              <option value="recentuser">Recientes de Usuario</option>
              <option value="recenthashtag">Hashtag</option>
            </select>
          </div>

          {this.state.queryType === 'recenthashtag' &&
            <div className="Input">
              <label htmlFor="hashtag">Hashtag</label>
              <input id="hashtag" type="text" value={this.state.hashtag} onChange={this.setHashtag}/>
            </div>
          }

          <div
            className="Save"
            onClick={this.save}
          >
            <i className="fas fa-check-circle"></i>
          </div>

          <p className="Status">{this.state.status}</p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newFeed: bindActionCreators(actions.newFeed, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SettingsModal);