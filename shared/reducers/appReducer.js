import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'

function editorMode(state, action) {
  return Object.assign({}, state, {mode: 'editor'});
}

function renderMode(state, action) {
  return Object.assign({}, state, {mode: 'render'});
}

function fusionMode(state, action) {
  return Object.assign({}, state, {mode: 'fusion'});
}

function folderMode(state, action) {
  return Object.assign({}, state, {mode: 'folderview'});
}

function flashcardMode(state, action) {
  return Object.assign({}, state, {mode: 'flashcard'});
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

function selectFolder(state, action) {
  return Object.assign({}, state, {folderIndex: action.index});
}

function selectPage(state, action) {
  return Object.assign({}, state, {pageIndex: action.index});
}

function showSnackbar(state, action) {
  return Object.assign({}, state,
    {snackbar: {
      open: true,
      msg: action.msg,
      time: action.time || 4000,
      action: action.action || function(){ return null }
      }
    });
}

function closeSnackbar(state, action) {
  return Object.assign({}, state, {snackbar: {open: false, msg: ""}});
}

function showPhotoAlert(state, action) {
  return Object.assign({}, state, {photoAlert: {open: true}});
}

function closePhotoAlert(state, action) {
  return Object.assign({}, state, {photoAlert: {open: false}});
}

const initial_state = {
  mode: 'menu',
  userid: null,
  folderIndex: 0,
  pageIndex: 0,
  quickmode_filepath: null,
  snackbar: {
    open: false,
    time: 4000,
    msg: ""
  },
  photoAlert: {
    open: false
  }
}

const appReducer = createReducer(initial_state, {
  'EDITOR_MODE': editorMode,
  'RENDER_MODE': renderMode,
  'FUSION_MODE': fusionMode,
  'FOLDER_MODE': folderMode,
  'FLASHCARD_MODE': flashcardMode,
  'MENU_MODE': menuMode,
  'SET_QUICK_FILEPATH': setQuickFilepath,
  'SET_USER': setUser,
  'SELECT_FOLDER': selectFolder,
  'SELECT_PAGE': selectPage,
  'SHOW_SNACKBAR': showSnackbar,
  'CLOSE_SNACKBAR': closeSnackbar,
  'PHOTO_ALERT': showPhotoAlert,
  'CLOSE_PHOTO_ALERT': closePhotoAlert
});

export default appReducer;
