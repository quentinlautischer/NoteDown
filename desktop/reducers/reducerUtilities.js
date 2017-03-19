const initial_state = { 
  mode: 'menu',
  userid: null,
  folderIndex: 0,
  pageIndex: 0,
  quickmode_filepath: null,
  notes: { 
    userid: null, 
    images: [], 
    folders: []
  } 
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default createReducer;