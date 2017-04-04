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

function settingsMode(state, action) {
  return Object.assign({}, state, {mode: 'settings'});
}

function showSnackbar(state, action) {
  state = update(state, { snackbar: {
      open: {$set : true}
  }});
  state = update(state, { snackbar: {
      msg: {$set : action.msg}
  }});
  state = update(state, { snackbar: {
      time: {$set : action.time || 4000}
  }});
  state = update(state, { snackbar: {
      action: {$set : action.action || ""}
  }});
  return state;
}

function closeSnackbar(state, action) {
  state = update(state, { snackbar: {
      open: {$set : false}
  }});
  state = update(state, { snackbar: {
      msg: {$set : ""}
  }});
  return state;
}

function showPhotoAlert(state, action) {
  return update(state, {
    photoAlert: {
      open: {$set : true}
    }
  });
}

function setPhotoAlertPhoto(state, action) {
  return update(state, {
    photoAlert: {
      photo: {$set : action.photo}
    }
  });
}

function closePhotoAlert(state, action) {
  return update(state, {
    photoAlert: {
      open: {$set : false}
    }
  });
}

function openDialog(state, action) {
  state = update(state, {
    dialog_open: {$set: true}
  });
  return update(state, {
    dialog_type: {$set: action.dialog_type}
  });
}

function closeDialog(state, action) {
  return update(state, {
    dialog_open: {$set: false}
  });
}

const initial_state = {
  mode: 'menu',
  userid: null,
  folderIndex: 0,
  pageIndex: 0,
  quickmode_filepath: null,
  dialog_open: false,
  dialog_type: null,
  snackbar: {
    open: false,
    time: 4000,
    msg: "",
    action: ""
  },
  photoAlert: {
    open: false,
    photo: null
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
  'PHOTO_ALERT_SET_PHOTO': setPhotoAlertPhoto,
  'CLOSE_PHOTO_ALERT': closePhotoAlert,
  'DIALOG_OPEN': openDialog,
  'DIALOG_CLOSE': closeDialog,
  'SETTINGS_MODE': settingsMode
});

export default appReducer;
