import React from 'react';
import TextField from 'react';
import NoteDownTitleLogo from './notedownTitleLogo';
import MenuButton from './menuButton';


class StartMenu extends React.Component {
  render() {
    return (
      <div className="login-menu">
        <NoteDownTitleLogo />
        <TextField className="username" label="Username" />
        <TextField className="password-field" label="Password" />
        <MenuButton className="login-btn" label="Login" onClick={() => this.props.request_login()} /> 
      </div>
    );
  }
}

export default StartMenu;