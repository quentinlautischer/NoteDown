import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'

function loginMode(state, action) {
  return Object.assign({}, state, {mode: 'login'});
}

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

// required for mobile viewer transitions
function flashcardFrontMode(state, action) {
  return Object.assign({}, state, {mode: 'flashcardFront'});
}
function flashcardBackMode(state, action) {
  return Object.assign({}, state, {mode: 'flashcardBack'});
}
function flashcardHintsMode(state, action) {
  return Object.assign({}, state, {mode: 'flashcardHints'});
}

function cameraMode(state, action) {
  return Object.assign({}, state, {mode: 'camera'});
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
  'LOGIN_MODE': loginMode,
  'EDITOR_MODE': editorMode,
  'RENDER_MODE': renderMode,
  'FUSION_MODE': fusionMode,
  'FOLDER_MODE': folderMode,
  'FLASHCARD_MODE': flashcardMode,
  'FLASHCARD_FRONT_MODE': flashcardFrontMode,
  'FLASHCARD_BACK_MODE': flashcardBackMode,
  'FLASHCARD_HINTS_MODE': flashcardHintsMode,
  'CAMERA_MODE': cameraMode,
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
