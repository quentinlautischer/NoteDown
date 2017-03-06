import React from 'react';
import NoteDownTitleLogo from './notedownTitleLogo';
import MenuButton from './menuButton';
import FlatButton from 'material-ui/FlatButton'
import MenuTextField from './menuTextField';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class StartMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 'main',
      username: '',
      password: '',
      email: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render() {
    if (this.state.mode == "login") {  
      return (
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuTextField value={this.state.username}  className="username" hintText="Username" onChange={this.handleUsernameChange}/>
          <MenuTextField value={this.state.password} className="password-field" hintText="Password" onChange={this.handlePasswordChange}/>
          <div className="login-signup-toggle">
            <MenuButton className="login-btn" label="Login" onClick={() => this.props.request_login(this.state.username, this.state.password)} /> 
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <FlatButton className="menu-button" label="Sign-Up" onClick={() => this.enterSignUpForm()} /> 
            <FlatButton label="Quickmode" onClick={() => this.props.quickmode()} />
          </div>
        </div>
      );
    } else if (this.state.mode == "sign-up") {
      return (
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuTextField value={this.state.username}  className="username" hintText="Username" onChange={this.handleUsernameChange}/>
          <MenuTextField value={this.state.password} className="password-field" hintText="Password" onChange={this.handlePasswordChange}/>
          <MenuTextField value={this.state.email} className="email" hintText="Email" onChange={this.handleEmailChange}/>
          <div className="login-signup-toggle">
            <MenuButton label="Sign-Up" onClick={() => this.props.request_signup(this.state.username, this.state.password, this.state.email)} />              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <FlatButton className="menu-button" label="Login" onClick={() => this.enterLoginForm()} />
            <FlatButton label="Quickmode" onClick={() => this.props.quickmode()} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuButton className="login-btn" label="Login" onClick={() => this.enterLoginForm()} /> 
          <div className="quickmode-btn">
            <MenuButton label="Quickmode" onClick={() => this.props.quickmode()} />
          </div>
        </div>
      );
    }
  }

  enterLoginForm() {
    this.setState({
      mode: 'login',
    });
  }

  enterSignUpForm() {
    this.setState({
      mode: 'sign-up',
    });
  }
}

export default StartMenu;