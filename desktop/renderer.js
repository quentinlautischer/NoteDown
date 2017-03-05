// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import StartMenu from './components/startMenu';

import FolderContainerView from './components/folderContainerView'
import DualmodeEditor from './components/dualmodeEditor'
import NoteDownTitleLogo from './components/notedownTitleLogo';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var ipc = require('electron').ipcRenderer;

class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      mode: 'sign-in',
      exceptionOccured: false,
      exceptionMsg: "No Exception"
    }

    ipc.on('error-toast', (event, arg) => {
      console.log("error occured: " + arg);
      this.setState({
        exceptionOccured: true,
      });
      this.setState({
        exceptionMsg: 'Main Proc Exception Caught: ' + arg,
      });
    });
  }

  handleRequestClose() {
    this.setState({
      exceptionOccured: false,
    });
  }

  render() {
    if (this.state.mode == 'sign-in') {
      return (
        <MuiThemeProvider>
          <div>
           <StartMenu 
            request_login={() => this.request_login()}
            request_signu={() => this.request_signup()}
            quickmode={() => this.quickmode()}
            />
           <Dialog 
            open={this.state.exceptionOccured} 
            title={this.state.exceptionMsg}
            />
          </div>
        </MuiThemeProvider>
      );  
    } else if (this.state.mode == 'quickmode') {
      return (
        <DualmodeEditor />
      );
    } else if (this.state.mode == 'folderview') {
      return (
        <FolderContainerView />
      );
    }
  }

  quickmode() {
    console.log("quickmode enabled");
    this.setState({
      mode: 'quickmode',
    });
  }

  request_login() {
    console.log("received login request");
    ipc.send('request-login', "username"+' '+"password");
    ipc.on('request-login-reply', (event, arg) => {
      console.log('received login reply: ' + arg);
      this.setState({
        mode: 'folderview',
      });
    })
  }

  request_sign_up() {
    console.log("received login request");
    ipc.send('request-signup', "username"+' '+"password");
    ipc.on('request-signup-reply', (event, arg) => {
      console.log('received signup reply: ' + arg);
      this.setState({
        mode: 'folderview',
      });
    })
  }

  start_app() {
    console.log("toggling app mode");
    this.setState({mode: 'app'});
  }
}
ReactDOM.render(<App/>,document.getElementById('notedown-app'))
