const initialState = {
  posts: [],
  page: 0,
  activeIndex: 0,
  minID: ''
}

function feed(state=initialState, action) {
  switch (action.type) {
    case 'ADD_POSTS': {

      // get from payload items not in initialState
      const statePostsID = state.posts.map((item) => (item.id));

      const newItems = action.payload.filter((item) => (
        statePostsID.findIndex((postID) => (postID === item.id)) === -1
      ));

      return Object.assign({}, state, {
        posts: state.posts.concat(newItems),
        page: state.page + 1
      });
    }
    case 'NEW_FEED' :
      return Object.assign({}, state, {
        posts: action.payload,
        page: 1,
        activeIndex: 0,
      });
    case 'ACTIVE_INDEX' :
      return Object.assign({}, state, {
        activeIndex: action.payload,
      });
    case 'SET_MIN_ID' :
      return Object.assign({}, state, {
        minID: action.payload,
      });
    default:
      return state;
  }
}

export default feed;