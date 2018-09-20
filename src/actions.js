function addPosts(data) {
  return {
    type:'ADD_POSTS',
    payload: data
  }
}

function newFeed(data) {
  return {
    type:'NEW_FEED',
    payload: data
  }
}

function activeIndex(index) {
  return {
    type: 'ACTIVE_INDEX',
    payload: index
  }
}

function setMinID(ID) {
  return {
    type: 'SET_MIN_ID',
    payload: ID
  }
}

export default {
  addPosts,
  newFeed,
  activeIndex,
  setMinID
}