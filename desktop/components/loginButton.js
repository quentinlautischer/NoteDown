import React from 'react';
import TextField from 'react';
import MenuButton from './menuButton';

class LoginButton extends MenuButton {
  render() {
    return (
      <div className="loginBox">
        <MenuButton label="Login" onClick={() => this.props.onClick()}/>
      </div>
    );
  }
}

export default LoginButton;