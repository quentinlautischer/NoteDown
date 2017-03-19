import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import appReducer from './reducers/appReducer';
import notesReducer from './reducers/notesReducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import StartMenu from './components/startMenu';
import menubuilder from './components/menubar';

import FolderContainerView from './components/folderContainerView'
import DualmodeEditor from './components/dualmodeEditor'
import NoteDownTitleLogo from './components/notedownTitleLogo';
import Waiter from './components/waiter';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var ipc = require('electron').ipcRenderer;
const {remote} = require('electron');
var fs = require('fs')
const {Menu, MenuItem} = remote;
const {dialog} = remote;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.init_ipc_app();
  }

  // This is temp for now --- Cant figure out how to have the DOM update on store subs.
  componentDidMount(){
    store.subscribe( this.storeDidUpdate.bind(this) );
  }

  storeDidUpdate(){
    this.setState({open: store.getState().sessionActive});
  }
  //

  setCurrentFolder(id) {
    console.log("Setting Current Folder " + id);
    this.setState({
      currentFolderid: id,
      mode: 'editor',
    });
  }

  handleRequestClose() {
    this.setState({
      exceptionOccured: false,
    });
  }

  render() {
    const menubar = Menu.buildFromTemplate(menubuilder(store));
    Menu.setApplicationMenu(menubar);
    console.log(store.getState());
    if (store.getState().state.mode == 'menu') {
      return (
        <StartMenu 
          request_login={(username, password) => this.request_login(username, password)}
          request_signup={(username, password, name) => this.request_signup(username, password, name)}
          quickmode={() => this.enter_quickmode()}
        />
      );  
    } else if (store.getState().state.mode == 'editor') {
      return (
        <DualmodeEditor 
          content={store.getState().notes.folders[store.getState().state.folderIndex].pages[store.getState().state.pageIndex].content}
          updateContent={(content) => this.updateContent(content)}
        />
      );

    } else if (store.getState().state.mode == 'folderview') {
      return (
        <FolderContainerView
            folders={store.getState().notes.folders}
            createFolder={(name) => this.createFolder(name)} 
            openFolder={id => this.open_folder(id)}
            deleteFolder={id => this.delete_folder(id)} 
        />
      );
    }
  }

  updateContent(content){
    store.dispatch({type: 'PAGE_CONTENT_CHANGE', 
      content: content, 
      folderIndex: store.getState().state.folderIndex,
      pageIndex: store.getState().state.pageIndex
    });
    this.request_push_data();
  }

  createFolder(name) {
    console.log(`creating new folder with name: ${name}`);
    const data = {name: name};
    ipc.send('create-folder-request', data);
  }

  open_folder(id) {
    console.log("Request to open folder: " + id);
    var index = this.findIndexOfFolder(id);
    store.dispatch({type: 'SELECT_FOLDER', index: index});
    store.dispatch({type: 'EDITOR_MODE'});
  }

  delete_folder(id) {
    console.log("Request to delete folder: " + id);
    var index = this.findIndexOfFolder(id);
    store.dispatch({type: 'DELETE_FOLDER', index: index});
  }

  findIndexOfFolder(folderid) {
    const folders = store.getState().notes.folders;
    const length = folders.length;
    var i;
    for(i = 0; i < length; i++) {
      if (folders[i]._id == folderid)
        return i;
    }
    return null;
  }

  findFolderWithId(folderid) {
    var theFolder = this.notes.folders.filter(function( folder ) {
      return folder._id == folderid;
    });
    return theFolder[0];
  }

  enter_quickmode(content) {
    store.dispatch({type: 'SET_NOTES', notes: {
      userid: null, 
      images: [], 
      folders: [ {
          name: "Folder",
          pages: [
            {
              content: ""
            }
          ]
        }
      ]
    }});
    store.dispatch({type: 'EDITOR_MODE'})
  }

  request_login(username, password) {
    console.log("received login request; Username: " + username + " Password: " + password);
    const data = {username: username, password: password};
    ipc.send('request-login', data);
  }

  request_signup(username, password, name) {
    console.log(`received signup request; Username: ${username} Password: ${password} Name: ${name}`);
    const data = {username: username, password: password, name: name};
    ipc.send('request-signup', data);
  }

  request_pull_data() {
    console.log("requesting data pull");
    const data = {userid: store.getState().state.userid};
    ipc.send('request-pull-data', data);
  }

  request_push_data() {
    console.log("requesting data push");
    const data = {userid: store.getState().state.userid, notes: store.getState().notes};
    ipc.send('request-push-data', data);
  }

  init_ipc_app() {
    ipc.on('error-toast', (event, data) => {
      console.log("error occured: " + data);
      this.setState({
        exceptionOccured: true,
        exceptionMsg: 'Main Proc Exception Caught: ' + data,
      });
    });

    ipc.on('request-login-response', (event, data) => {
      console.log('received login response: ' + data);
      if (data.result == true) {
        store.dispatch({type: 'SET_USER', userid: data.userid});
        this.request_pull_data();
      } else {
        dialog.showErrorBox('error', data.msg);
      }
    })

    ipc.on('request-signup-response', (event, data) => {
      console.log('received signup reply: ' + JSON.stringify(data));
      if (data.result == true) {
        store.dispatch({type: 'SET_USER', userid: data.userid});
        this.request_pull_data();
      } else {
        dialog.showErrorBox('error', data.msg);
      }
    })

    ipc.on('request-push-data-response', (event, data) => {
      console.log('request-push-data-response: ' + data);
    })

    ipc.on('request-pull-data-response', (event, data) => {
      console.log('request-pull-data-response: ' + data);

      if (data.result == true){
        store.dispatch({type: 'SET_NOTES', notes: data.notes});
        store.dispatch({type: 'FOLDER_MODE'});
      } else {
        dialog.showErrorBox('error', data.msg);
      }
    })

    ipc.on('request-photo-response', (event, data) => {
      console.log('request-photo-response: ' + data);
    })

    ipc.on('create-folder-response', (event, data) => {
      console.log(`create folder reponse: ${data.data}`);
      var folder = JSON.parse(data.data);

      store.dispatch({type: 'ADD_FOLDER', folder: folder});
      this.request_push_data();
    });
  }
}

const reducer = combineReducers({
  state: appReducer,
  notes: notesReducer
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('notedown-app')
);
