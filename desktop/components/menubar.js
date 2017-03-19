const {app, Menu} = require('electron')

const is_quickmode = function(state) {
  return (state.mode == 'editor' && state.userid == null);
}

const is_editor = function(state) {
  return (state.mode == 'editor');
}

const is_logged_in = function(state) {
  return (state.userid != null);
}

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
        click () { store.dispatch({type: "MENU_CMD", cmd: 'OPEN'}) }
      },
      {
        role: 'Save',
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        visible: is_quickmode(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'SAVE'}) }
      },
      {
        role: 'Save As',
        label: 'Save As',
        visible: is_quickmode(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'SAVEAS'}) }
      },
      {
        role: 'FolderView',
        label: 'FolderView',
        visible: is_logged_in(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'FOLDERVIEW'}) }
      },
      {
        role: 'Flashcards',
        label: 'Flashcards',
        visible: is_logged_in(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'FLASHCARDS'}) }
      },
      {
        type: 'separator'
      },
      {
        role: 'Login',
        label: 'Login',
        visible: !is_logged_in(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'LOGIN'}) }
      },
      {
        role: 'Logout',
        label: 'Logout',
        visible: is_logged_in(state),
        click () { store.dispatch({type: "MENU_CMD", cmd: 'LOGOUT'}) }
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
        click () { store.dispatch({type: "MENU_CMD", cmd: 'PUSHTOCLOUD'}) }

      },
      {
        role: 'Pull From Cloud',
        label: 'Pull From Cloud',
        visible: is_logged_in(state),
        enabled: false, // until I figure it out
        click () { store.dispatch({type: "MENU_CMD", cmd: 'PULLFROMCLOUD'}) }

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