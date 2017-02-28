import React from 'react';
import TextField from 'react';
import NoteDownTitleLogo from './notedownTitleLogo';
import MenuButton from './menuButton';


class StartMenu extends React.Component {
  render() {
    return (
      <div className="start-menu">
        <NoteDownTitleLogo />
        <div className="login-btn">
          <MenuButton label="Login" onClick={() => this.props.request_login()} /> 
        </div>
        <div className="quickmode-btn">
          <MenuButton label="Quickmode" onClick={() => this.props.quickmode()} />
        </div>
      </div>
    );
  }
}

export default StartMenu;