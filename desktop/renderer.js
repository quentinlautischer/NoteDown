// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import StartMenu from './components/startMenu';
import menubar_template from './components/menubar';

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
const {Menu} = remote;

class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      mode: 'start-menu',
      currentFolderid: null,
      waiting: false,
      exceptionOccured: false,
      exceptionMsg: "No Exception"
    }

    this.notes = {
      userid: null,
      images: [],
      folders: []
    };

    this.init_ipc_app();
    const menubar = Menu.buildFromTemplate(menubar_template);
    Menu.setApplicationMenu(menubar);
  }

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
    if (this.state.mode == 'start-menu') {
      return (
        <MuiThemeProvider>
          <div>
           <StartMenu 
            request_login={(username, password) => this.request_login(username, password)}
            request_signup={(username, password, email) => this.request_signup(username, password, email)}
            quickmode={() => this.quickmode()}
          />
          <Dialog 
            open={this.state.exceptionOccured} 
            title={this.state.exceptionMsg}
          />
          <Waiter 
            open={this.state.waiting}
            title={"Waiting"} 
          />
          </div>
        </MuiThemeProvider>
      );  
    } else if (this.state.mode == 'editor') {
      return (
        <DualmodeEditor state={this.state}  notes={this.notes} />
      );
    } else if (this.state.mode == 'folderview') {
      return (
        <FolderContainerView newFolder={() => this.newFolder()} openFolder={id => this.setCurrentFolder(id)} notes={this.notes} />
      );
    }
  }

  newFolder() {
    console.log("new folder");
  }

  open_folder(id) {
    console.log("Open Folder");
    console.log("Request to open folder: " + id);
    console.log(id);
    //Setup some state    
  }

  quickmode() {
    console.log("quickmode enabled");
    this.setState({
      mode: 'editor',
    });
  }

  request_login(username, password) {
    console.log("received login request; Username: " + username + " Password: " + password);

    const data = {username: username, password: password};
    ipc.send('request-login', data);

    this.setState({
      waiting: true,
    });
  }

  request_signup(username, password, email) {
    console.log("received signup request; Username: " + username + " Password: " + password + " Email: " + email);
    
    const data = {username: username, password: password, email: email};
    ipc.send('request-signup', data);

    this.setState({
      waiting: true,
    });
  }

  request_pull_data() {
    console.log("requesting data pull");
    const data = {userid: "lautisch"};
    ipc.send('request-pull-data', data);
  }

  init_ipc_app() {
    ipc.on('error-toast', (event, arg) => {
      console.log("error occured: " + arg);
      this.setState({
        exceptionOccured: true,
        exceptionMsg: 'Main Proc Exception Caught: ' + arg,
      });
    });

    ipc.on('request-login-response', (event, arg) => {
      console.log('received login response: ' + arg);
      this.setState({ waiting: false,});

      this.request_pull_data();
    })

    ipc.on('request-signup-response', (event, arg) => {
      console.log('received signup reply: ' + arg);
      this.setState({
        waiting: true,
      });

      this.request_pull_data();
    })

    ipc.on('request-push-data-response', (event, arg) => {
      console.log('request-push-data-response: ' + arg);
    })

    ipc.on('request-pull-data-response', (event, arg) => {
      console.log('request-pull-data-response: ' + arg);

      this.notes = arg.notes;
      console.log(this.notes);
      this.setState({mode: 'folderview',});
    })

    ipc.on('request-photo-response', (event, arg) => {
      console.log('request-photo-response: ' + arg);
    })
  }

}
ReactDOM.render(<App/>,document.getElementById('notedown-app'))
