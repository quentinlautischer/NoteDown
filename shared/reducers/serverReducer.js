var update = require('react-addons-update');

addOnlineUser = function(state, action) {
  const user = {
    userid: action.userid,
    socketid: action.socketid
  }

  return update(state, {
      onlineUsers:  {$push : [user]}
  });
}

removeOnlineUser = function(state, action) {
  var onlineUsers = state.onlineUsers;
  var i;
  var index = null;
  for(i=0;i<onlineUsers.length;i++) {
    if (onlineUsers[i].socketid == action.socketid) {
      index = i;
    }
  }

  return update(state, {
    onlineUsers: {$splice: [[index, 1]]}
  });
}

const initial_state = {
  onlineUsers: [],
}

serverReducer = function(state = initial_state, action){
  switch (action.type) {
    case 'ADD_ONLINE_USER':
      return addOnlineUser(state, action);
    case 'REMOVE_ONLINE_USER':
      return removeOnlineUser(state, action);
    default:
      return state;
  }
}

module.exports = {
    serverReducer: serverReducer
}