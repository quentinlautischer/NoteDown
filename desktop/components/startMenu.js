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
    this.state = 
    {
      mode: 'main'
    }
  }

  getInitialState() {
    return {
      mode: 'main'
    }
  }

  render() {
    if (this.state.mode == "login") {  
      return (
        <div className="start-menu">
          <NoteDownTitleLogo />
          <MenuTextField  className="username" hintText="Username" />
          <MenuTextField className="password-field" hintText="Password" />
          <div className="login-signup-toggle">
            <MenuButton className="login-btn" label="Login" onClick={() => this.props.request_login()} /> 
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
          <MenuTextField className="username" hintText="Username" />
          <MenuTextField className="password-field" hintText="Password" />
          <MenuTextField className="email" hintText="Email" />
          <div className="login-signup-toggle">
            <MenuButton label="Sign-Up" onClick={() => this.props.request_signup()} />              
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