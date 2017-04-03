import update from '../node_modules/immutability-helper';

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

function autosaveEnabled(state, action) {
  return Object.assign({}, state, {autosave_enabled: action.value});
}

const initial_state = {
  mode: 'quickmode',
  cursor_position: 0,
  autosave_enabled: true
}

const editorReducer = createReducer(initial_state, {
  'EDITOR_MODE_QUICKMODE': editorModeQuickmode,
  'EDITOR_MODE_CLOUD': editorModeCloud,
  'CURSOR_CHANGE': cursorChange,
  'AUTOSAVE_ENABLED': autosaveEnabled
});

export default editorReducer;
