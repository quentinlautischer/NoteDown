 import React from 'react';

import menubuilder from './menubar';
const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var ipc = require('electron').ipcRenderer;

class MenubarTile extends React.Component {
  constructor() {
    super();

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleMaximizeClick = this.handleMaximizeClick.bind(this);
    this.handleUnmaximizeClick = this.handleUnmaximizeClick.bind(this);
    this.handleMinimizeClick = this.handleMinimizeClick.bind(this);
  }

  handleMenuClick() {
    const menubar = Menu.buildFromTemplate(menubuilder(this.props.store));
    menubar.popup();
  }

  handleCloseClick() {
    ipc.send('quit');
  }

  handleMaximizeClick() {
    ipc.send('maximize');
  }

  handleUnmaximizeClick() {
    ipc.send('unmaximize');
  }

  handleMinimizeClick() {
    ipc.send('minimize');
  }

  minormax() {
    if (!remote.getCurrentWindow().isMaximized()) {
      return (<div className="menubar-tile window-tile" onClick={this.handleMaximizeClick}>
                <span><i className="icon-square" aria-hidden="true"></i></span>
              </div>);
    } else {
      return (<div className="menubar-tile window-tile" onClick={this.handleUnmaximizeClick}>
                <span><i className="icon-clone" aria-hidden="true"></i></span>
              </div>); 
    }
  }

  render() {
    if (process.platform !== 'darwin') {
    return (
      <div className="menubar-custom">
        <div className="menubar-tile menu-bars" onClick={this.handleMenuClick}>
          <span><i className="icon-bars" aria-hidden="true"></i></span>
        </div>
        <div className="menubar-tile window-tile" onClick={this.handleCloseClick}>
          <span>X</span>
        </div>
        {this.minormax()}
        <div className="menubar-tile window-tile" onClick={this.handleMinimizeClick}>
         <span>&mdash;</span>
        </div>
      </div>
    );
    } else {
      return (<div/>);
    }
  }
  
}

export default MenubarTile;