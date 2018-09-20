import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSettings } from '../../utils/webstorage';
import actions from '../../actions';
import './post.css'

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: '',
    }
  }

  delay(cb, s) {
    setTimeout(cb, s);
  }

  showLayers = () => {
    this.setState({
      show: ' show'
    });
  }

  hideLayers = () => {
    this.setState({
      show: ''
    });

    this.delay(this.showItem, 500);
  }

  nextActiveItem = () => {
    let { activeIndex } = this.props;

    if (activeIndex < this.props.posts.length - 1) {
      activeIndex++;
    }
    else {
      activeIndex = 0;
    }

    this.props.setActiveIndex(activeIndex);
  }

  showItem = () => {
    this.delay(this.showLayers, 1000);
    this.delay(this.hideLayers, 8000);
    this.delay(this.nextActiveItem, 9000);
  }

  componentDidMount() {
    this.showItem();
  }

  render() {
    if (this.props.activeIndex !== null) {
      const {
        caption,
        user,
        comments,
        likes,
        images,
      } = this.props.posts[this.props.activeIndex];

      const { hashtag } = getSettings();

      const image = images.standard_resolution;

      const componentStyle = {
        backgroundImage: `url(${image.url})`
      }

      const imageClass = image.width < image.height ? `ImagePortraint${this.state.show}` : `Image${this.state.show}`;
      const contentClass = image.width < image.height ? `ContentPortraint${this.state.show}` : `Content${this.state.show}`;

      return (
        <div className="Post">
          <div className={imageClass} style={componentStyle} />

          <div className={contentClass}>

            {hashtag &&
              <h3>#{hashtag}</h3>
            }

            <div className="Profile">
              <img src={user.profile_picture} alt='User Profile' className="profile-picture"/>
              <p className="profile-username">@{user.username}</p>
            </div>

            {caption &&
              <p>{caption.text}</p>
            }

            <div className="Meta">
              <span><i className="fas fa-comment-alt"></i> {comments.count}</span>
              <span><i className="fas fa-heart"></i> {likes.count}</span>
            </div>

          </div>
        </div>
      );

    }

    return null;

  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    page: state.page,
    activeIndex: state.activeIndex
  };
}

function mapDispathToProps(dispatch) {
  return {
    setActiveIndex: bindActionCreators(actions.activeIndex, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Post);