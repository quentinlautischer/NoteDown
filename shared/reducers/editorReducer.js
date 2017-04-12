/*
Relevant requirements:
- FU-1: Desktop: QuickMode: Quick Create
- FU-2: Desktop: QuickMode: Quick Open
- FU-10: Desktop: Editor: Dual Mode Edit
- FU-29: Mobile: Editor: Quick Edit
*/

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

function toggleFormatBar(state, action) {
  return Object.assign({}, state, {formatBar: !state.formatBar})
}

function inputColorMode(state, action) {
  if (action.color == 'dark') {
    return Object.assign({}, state, {inputColorMode: 'dark'})
  } else if (action.color == 'light') {
    return Object.assign({}, state, {inputColorMode: 'light'})
  } else {
     return Object.assign({}, state, {inputColorMode: 'light'})
  }
}

const initial_state = {
  mode: 'quickmode',
  formatBar: true,
  inputColorMode: 'dark',
  cursor_position: 0,
  autosave_enabled: true
}

const editorReducer = createReducer(initial_state, {
  'EDITOR_MODE_QUICKMODE': editorModeQuickmode,
  'EDITOR_MODE_CLOUD': editorModeCloud,
  'CURSOR_CHANGE': cursorChange,
  'AUTOSAVE_ENABLED': autosaveEnabled,
  'TOGGLE_FORMAT_BAR': toggleFormatBar,
  'INPUT_COLOR_MODE': inputColorMode,
});

export default editorReducer;
