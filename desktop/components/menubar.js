const {app, Menu} = require('electron')

const {remote} = require('electron');
var fs = require('fs')
const {dialog} = remote;

////////////////////////////////////////////////////////
/// Bool Queries
const is_quickmode = function(state) {
  return (state.mode == 'editor' && state.userid == null);
}

const is_editor = function(state) {
  return (state.mode == 'editor');
}

const is_logged_in = function(state) {
  return (state.userid != null);
}

////////////////////////////////////////////////////////
/// FS utils

function readFile(filepath, store){
  fs.readFile(filepath, 'utf-8', function (err, data) {
    if(err){
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    store.dispatch({type: 'SET_QUICK_FILEPATH', path: filepath})
    store.dispatch({type: 'PAGE_CONTENT_CHANGE', content: data});
  });
}

function saveas() {
  dialog.showSaveDialog({
    filters: [
      {name: 'Markdown', extensions: ['md']},
      {name: 'All Files', extensions: ['*']}
    ]
  }, function (fileName) {
    if (fileName === undefined){
      console.log("You didn't save the file");
      return;
    }
    // fileName is a string that contains the path and filename created in the save file dialog.
    store.dispatch({type: 'SET_QUICK_FILEPATH', path: fileName});  
    fs.writeFile(fileName, get_quickmode_file_contents(), function (err) {
      if(err){
        alert("An error ocurred creating the file "+ err.message)
      }        
      alert("The file has been succesfully saved");
    });
  }); 
}

////////////////////////////////////////////////////////
/// Menubar Click Actions

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
  if (store.getState().quickmode_filepath == null) {
    saveas();
  } else {
    fs.writeFile(store.getState().quickmode_filepath, store.getState().notes.folders[0].pages[0].content, function (err) {
    if(err){
      alert("An error ocurred updating the file"+ err.message);
      console.log(err);
      return;
    }
    alert("The file has been succesfully saved");
    }); 
  }
}

function menuSaveas(store) {
  saveas();
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
        role: 'Open',
        label: 'Open',
        visible: (state.mode == 'editor' && store.getState().userid == null) ? true : false,
        click () { menuOpen(store) }
      },
      {
        role: 'Save',
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        visible: is_quickmode(state),
        click () { menuSave(store) }
      },
      {
        role: 'Save As',
        label: 'Save As',
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