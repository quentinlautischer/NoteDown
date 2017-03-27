const {app, Menu} = require('electron')

const {remote} = require('electron');
var fs = require('fs')
const {dialog} = remote;

const ipc = require('electron').ipcRenderer;

////////////////////////////////////////////////////////
/// Bool Queries
const is_quickmode = function(state) {
  return (state.state.mode == 'editor' && state.state.userid == null);
}

const is_editor = function(state) {
  return (state.state.mode == 'editor');
}

const is_logged_in = function(state) {
  return (state.state.userid != null);
}

////////////////////////////////////////////////////////
/// FS utils

function readFile(filepath, store){
  fs.readFile(filepath, 'utf-8', function (err, data) {
    if(err){
      store.dispatch({type: 'SHOW_SNACKBAR', msg: `An error ocurred reading the file: ${err.message}`});
      return;
    }
    store.dispatch({type: 'SET_QUICK_FILEPATH', path: filepath})
    store.dispatch({type: 'PAGE_CONTENT_CHANGE', 
      content: data, 
      folderIndex: store.getState().state.folderIndex,
      pageIndex: store.getState().state.pageIndex
    });
  });
}

function saveas(store) {
  dialog.showSaveDialog({
    filters: [
      {name: 'Markdown', extensions: ['md']},
      {name: 'All Files', extensions: ['*']}
    ]
  }, function (fileName) {
    if (fileName === undefined){
      store.dispatch({type: 'SHOW_SNACKBAR', msg: "You did not save the file"});
      return;
    }
    // fileName is a string that contains the path and filename created in the save file dialog.
    store.dispatch({type: 'SET_QUICK_FILEPATH', path: fileName});  
    fs.writeFile(fileName, store.getState().notes.folders[0].pages[0].content, function (err) {
      if(err){
        store.dispatch({type: 'SHOW_SNACKBAR', msg: "An error occurred while saving file"});
      }        
      store.dispatch({type: 'SHOW_SNACKBAR', msg: "The file has been succesfully saved"});
    });
  }); 
}

////////////////////////////////////////////////////////
/// Menubar Click Actions
function menuNew(store) {
  store.dispatch({type: 'SET_QUICK_FILEPATH', path: ""})
  store.dispatch({type: 'PAGE_CONTENT_CHANGE', 
    content: "", 
    folderIndex: store.getState().state.folderIndex,
    pageIndex: store.getState().state.pageIndex
  });
}


function menuOpen(store) {
  var filename = dialog.showOpenDialog({
    filters: [
      {name: 'Markdown', extensions: ['md']},
      {name: 'All Files', extensions: ['*']}
    ]
  }, function(fileName) {
    readFile(fileName[0], store);
  });
}

function menuSave(store) {
  if (store.getState().state.quickmode_filepath == null) {
    saveas(store);
  } else {
    fs.writeFile(store.getState().state.quickmode_filepath, store.getState().notes.folders[0].pages[0].content, function (err) {
    if(err){
      store.dispatch({type: 'SHOW_SNACKBAR', msg: "An error occurred while saving file"});
      console.log(err);
      return;
    }
    store.dispatch({type: 'SHOW_SNACKBAR', msg: "The file has been succesfully saved"});
    }); 
  }
}

function menuSaveas(store) {
  saveas(store);
}

function menuFolderview(store) {
  store.dispatch({type: 'FOLDER_MODE'});
}

function menuFlashcards(store) {
  store.dispatch({type: 'FLASHCARD_MODE'});
}

function menuLogin(store) {
  store.dispatch({type: 'MENU_MODE'});
}

function menuLogout(store) {
  store.dispatch({type: 'MENU_MODE'});
  store.dispatch({type: 'SET_USER', userid: null});
  store.dispatch({type: 'SET_NOTES', notes: null});
}

function menuPushToCloud(store) {
}

function menuPullFromCloud(store) {
}


////////////////////////////////////////////////////////
/// Menubar Template Builder

const menubar_template_builder = function(store) {
  var state = store.getState();
  const menubar_template = [
  {
    label: 'File',
    submenu: [
      {
        role: 'New',
        label: 'New',
        accelerator: 'CmdOrCtrl+N',
        enabled: is_quickmode(state),
        visible: is_quickmode(state),
        click () { menuNew(store) }
      },      
      {
        role: 'Open',
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        enabled: is_quickmode(state),
        visible: is_quickmode(state),
        click () { menuOpen(store) }
      },
      {
        role: 'Save',
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        enabled: is_quickmode(state),
        visible: is_quickmode(state),
        click () { menuSave(store) }
      },
      {
        role: 'Save As',
        label: 'Save As',
        enabled: is_quickmode(state),
        visible: is_quickmode(state),
        click () { menuSaveas(store) }
      },
      {
        role: 'FolderView',
        label: 'FolderView',
        visible: is_logged_in(state),
        click () { menuFolderview(store) }
      },
      {
        role: 'Flashcards',
        label: 'Flashcards',
        visible: is_logged_in(state),
        click () { menuFlashcards(store) }
      },
      {
        type: 'separator'
      },
      {
        role: 'Login',
        label: 'Login',
        visible: !is_logged_in(state),
        click () { menuLogin(store) }
      },
      {
        role: 'Logout',
        label: 'Logout',
        visible: is_logged_in(state),
        click () { menuLogout(store) }
      },
      {
        role: 'Quit',
        label: 'Quit',
        click () { ipc.send('quit'); }
      }

    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        label: 'Insert Photo',
        enabled: is_quickmode(state),
        visible: is_quickmode(state),
        click () { store.dispatch({type: 'PHOTO_ALERT'}) }
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        role: 'reload'
      },
      {
        role: 'forcereload'
      },
      {
        role: 'toggledevtools'
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    label: 'Sync',
    submenu: [
      {
        role: 'Push To Cloud',
        label: 'Push To Cloud',
        visible: is_logged_in(state),
        enabled: false, // until I figure it out
        click () { menuPushToCloud(store) }

      },
      {
        role: 'Pull From Cloud',
        label: 'Pull From Cloud',
        visible: is_logged_in(state),
        enabled: false, // until I figure it out
        click () { menuPullFromCloud(store) }

      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Debug',
        click () { store.dispatch({type: "DEBUG"}) }
      },
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  menubar_template.unshift({
    label: "NoteDown",
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
  // Edit menu.
  menubar_template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  )
  // Window menu.
  menubar_template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

  return menubar_template;
}


export default menubar_template_builder;