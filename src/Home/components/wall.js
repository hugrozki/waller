import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './wall.css';
import api from '../../utils/api';
import actions from '../../actions.js';
import Post from './post';

class Wall extends Component {

  fetchFeed = async(reset = false) => {
    // get recent media
    const posts = await api.recent();

    if (posts.length > 0) {
      this.props.actions.addPosts(posts);
    }
  }

  async componentDidMount() {
    this.fetchFeed();
    //set fetchinterval. Minimun one request every 18 seconds (18000)
    setInterval(this.fetchFeed, 60000);
  }

  render() {
    return (
      <div id="Wall">
        <div id='WallContainer' className='Wall'>
          {this.props.posts.length > 0 &&
            this.props.posts.map(item => {
              return (
                <div key={item.id} className='WallItem' style={{ backgroundImage: `url(${item.images.low_resolution.url})` }}>
                </div>
              );
            })
          }
        </div>


        {this.props.posts.length > 0 &&
          <Post/>
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    page: state.page,
    minID: state.minID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);