import update from 'immutability-helper';

import createReducer from './reducerUtilities'

function editorMode(state, action) {
  return Object.assign({}, state, {mode: 'editor'});
}

function folderMode(state, action) {
  return Object.assign({}, state, {mode: 'folderview'});
}

function flashcardMode(state, action) {
  return Object.assign({}, state, {mode: 'flashcardview'});
}

function menuMode(state, action) {
  return Object.assign({}, state, {mode: 'menu'});
}

function setQuickFilepath(state, action) {
  return Object.assign({}, state, {quickmode_filepath: action.path});
}

function setUser(state, action) {
  return Object.assign({}, state, {userid: action.userid});
}

function selectFolder(state, action){
  return Object.assign({}, state, {folderIndex: action.index});
}

function selectPage(state, action){
  return Object.assign({}, state, {pageIndex: action.index});
}

const initial_state = {
  mode: 'menu',
  userid: null,
  folderIndex: 0,
  pageIndex: 0,
  quickmode_filepath: null
}

const appReducer = createReducer(initial_state, {
  'EDITOR_MODE': editorMode,
  'FOLDER_MODE': folderMode,
  'FLASHCARD_MODE': flashcardMode,
  'MENU_MODE': menuMode,
  'SET_QUICK_FILEPATH': setQuickFilepath,
  'SET_USER': setUser,
  'SELECT_FOLDER': selectFolder,
  'SELECT_PAGE': selectPage
});

export default appReducer;