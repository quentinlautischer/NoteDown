import update from 'immutability-helper';

import createReducer from './reducerUtilities'

function editorModeQuickmode(state, action) {
  return Object.assign({}, state, {mode: 'quickmode'});
}

function editorModeCloud(state, action) {
  return Object.assign({}, state, {mode: 'cloud'});
}

function cursorChange(state, action) {
  return Object.assign({}, state, {cursor_position: action.position});
}

const initial_state = {
  mode: 'quickmode',
  cursor_position: 0
}

const editorReducer = createReducer(initial_state, {
  'EDITOR_MODE_QUICKMODE': editorModeQuickmode,
  'EDITOR_MODE_CLOUD': editorModeCloud,
  'CURSOR_CHANGE': cursorChange
});

export default editorReducer;