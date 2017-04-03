import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import appReducer from '../shared/reducers/appReducer';
import notesReducer from '../shared/reducers/notesReducer';
import editorReducer from '../shared/reducers/editorReducer';
import flashcardReducer from '../shared/reducers/flashcardReducer';

import menubuilder from './components/menubar';
import StartMenu from './components/startMenu';
import DualmodeEditor from './components/dualmodeEditor';
import FlashcardViewer from './components/flashcardViewer'
import FolderContainerView from './components/folderContainerView';
import MenubarTile from './components/menubarTile';

import DialogFileDrag from './components/dialogFileDrag';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Snackbar from 'material-ui/Snackbar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var hljs = require('highlight.js');

const ipc = require('electron').ipcRenderer;
const {remote} = require('electron');
const fs = require('fs')
const {Menu, MenuItem} = remote;
const {dialog} = remote;


class App extends React.Component {
  constructor() {
    super();
    this.state = { open: false  };
    this.init_ipc_app();
  }

  // This is temp for now --- Cant figure out how to have the DOM update on store subs.
  componentDidMount(){
    hljs.initHighlighting();
    store.subscribe( this.storeDidUpdate.bind(this) );
  }

  storeDidUpdate(){
    this.setState({open: store.getState().sessionActive});
  }

  render() {
    // May be invisible but this keep the accelerator keybinds active.
    const menubar = Menu.buildFromTemplate(menubuilder(store));
    Menu.setApplicationMenu(menubar);
    // console.log(store.getState());

    switch (store.getState().state.mode) {
      case 'menu':
        return (
          <div>
            <MenubarTile store={store}/>
            <StartMenu store={store}/>
            <Snackbar
              open={store.getState().state.snackbar.open}
              message={store.getState().state.snackbar.msg}
              action={store.getState().state.snackbar.action}
              autoHideDuration={store.getState().state.snackbar.time}
              onRequestClose={() => store.dispatch({type: 'CLOSE_SNACKBAR'})}
              onActionTouchTap={() => store.dispatch({type: 'PHOTO_ALERT'})}
            />
          </div>
        );
      case 'editor':
        return (
          <div>
            <MenubarTile store={store}/>
            <DualmodeEditor store={store}/>
            <Snackbar
              open={store.getState().state.snackbar.open}
              message={store.getState().state.snackbar.msg}
              action={store.getState().state.snackbar.action}
              autoHideDuration={store.getState().state.snackbar.time}
              onRequestClose={() => store.dispatch({type: 'CLOSE_SNACKBAR'})}
              onActionTouchTap={() => store.dispatch({type: 'PHOTO_ALERT'})}
            />
          </div>
        );
      case 'folderview':
        return (
          <div>
            <MenubarTile store={store}/>
            <FolderContainerView store={store}/>
            <Snackbar
              open={store.getState().state.snackbar.open}
              message={store.getState().state.snackbar.msg}
              action={store.getState().state.snackbar.action}
              autoHideDuration={store.getState().state.snackbar.time}
              onActionTouchTap={store.getState().state.snackbar.action}
              onRequestClose={() => store.dispatch({type: 'CLOSE_SNACKBAR'})}
              onActionTouchTap={() => store.dispatch({type: 'PHOTO_ALERT'})}
            />
          </div>
        );
      case 'flashcard':
        return (
          <div>
            <MenubarTile store={store}/>
            <FlashcardViewer store={store}/>
            <Snackbar
              open={store.getState().state.snackbar.open}
              message={store.getState().state.snackbar.msg}
              action={store.getState().state.snackbar.action}
              autoHideDuration={store.getState().state.snackbar.time}
              onRequestClose={() => store.dispatch({type: 'CLOSE_SNACKBAR'})}
              onActionTouchTap={() => store.dispatch({type: 'PHOTO_ALERT'})}
            />
          </div>
        )
      default: 
        return (<div>Error</div>); // Make an error view?
    }
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
        store.dispatch({type: 'SHOW_SNACKBAR', msg: 'Notes updated from cloud'});
      } else {
        dialog.showErrorBox('error', data.msg);
        store.dispatch({type: 'SHOW_SNACKBAR', msg: 'Error pulling data from cloud'});
      }
    })

    ipc.on('photo-supply-request', (event, data) => {
      console.log('photo-supply-request:');
      store.dispatch({type: 'PHOTO_ALERT_SET_PHOTO', photo: data.photo});
      store.dispatch({
        type: 'SHOW_SNACKBAR',
        msg: 'Mobile has passed you a Photo',
        action: 'Insert Photo',
        time: 60000
      });
    })

    ipc.on('re-render', (event, data) => {
      this.forceUpdate();
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
  notes: notesReducer,
  editor: editorReducer,
  flashcards: flashcardReducer
});

const store = createStore(reducer);

document.addEventListener('dragover', event => event.preventDefault())
document.addEventListener('drop', event => event.preventDefault())

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('notedown-app')
);
