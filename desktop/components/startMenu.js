/*
Relevant requirements:
- FU-4: User Account: Creation
- FU-5: User Account: Authentication
*/


import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NoteDownTitleLogo from './notedownTitleLogo';
import MenuButton from './menuButton';
import FlatButton from 'material-ui/FlatButton'
import MenuTextField from './menuTextField';
import MenuPasswordField from './menuPasswordField';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';


import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

class StartMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 'main',
      username: '',
      password: '',
      name: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  request_login(username, password) {
    console.log("received login request; Username: " + username + " Password: " + password);
    const data = {username: username, password: password, platform: 'desktop'};
    ipc.send('request-login', data);
  }

  request_signup(username, password, name) {
    console.log(`received signup request; Username: ${username} Password: ${password} Name: ${name}`);
    const data = {username: username, password: password, name: name};
    ipc.send('request-signup', data);
  }

  quickmode() {
    this.props.store.dispatch({type: 'SET_NOTES', notes: {
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
    this.props.store.dispatch({type: 'EDITOR_MODE_QUICKMODE'});
    this.props.store.dispatch({type: 'EDITOR_MODE'})
  }

  fusionmode() {
    this.props.store.dispatch({type: 'FUSION_MODE'})
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render() {
    if (this.state.mode == "login") {  
      return (
        <MuiThemeProvider>
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuTextField value={this.state.username}  className="username" hintText="Username/Email" onChange={this.handleUsernameChange}/>
          <MenuPasswordField value={this.state.password} className="password-field" hintText="Password" onChange={this.handlePasswordChange}/>
          <div className="login-signup-toggle">
            <MenuButton className="login-btn" label="Login" onClick={() => this.request_login(this.state.username, this.state.password)} /> 
            <FlatButton className="menu-button" label="Sign-Up" onClick={() => this.enterSignUpForm()} /> 
            <FlatButton label="Quickmode" onClick={() => this.quickmode()} />
          </div>
        </div>
        </MuiThemeProvider>
      );
    } else if (this.state.mode == "sign-up") {
      return (
        <MuiThemeProvider>
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuTextField value={this.state.username}  className="username" hintText="Username/Email" onChange={this.handleUsernameChange}/>
          <MenuPasswordField value={this.state.password} className="password-field" hintText="Password" onChange={this.handlePasswordChange}/>
          <MenuTextField value={this.state.name} className="name" hintText="Name" onChange={this.handleNameChange}/>
          <div className="login-signup-toggle">
            <MenuButton label="Sign-Up" onClick={() => this.request_signup(this.state.username, this.state.password, this.state.name)} />              
            <FlatButton className="menu-button" label="Login" onClick={() => this.enterLoginForm()} />
            <FlatButton label="Quickmode" onClick={() => this.quickmode()} />
          </div>
        </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuButton className="login-btn" label="Login" onClick={() => this.enterLoginForm()} /> 
          <div className="quickmode-btn">
            <MenuButton label="Quickmode" onClick={() => this.quickmode()} />
          </div>
        </div>
        </MuiThemeProvider>
      );
    }
  }

  enterLoginForm() {
    this.setState({
      mode: 'login',
    });
    ipc.send('initialize-socket', null);
  }

  enterSignUpForm() {
    this.setState({
      mode: 'sign-up',
    });
  }
}

export default connect()(StartMenu);