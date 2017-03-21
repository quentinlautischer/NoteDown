import React from 'react';

import menubuilder from './menubar';
const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var ipc = require('electron').ipcRenderer;

class MenubarTile extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const menubar = Menu.buildFromTemplate(menubuilder(this.props.store));
    menubar.popup();
  }

  render() {

    return (
      <div className="menubar-tile" onClick={this.handleClick}>
        <i className="icon-bars" aria-hidden="true"></i>
      </div>
    );
  }
  
}

export default MenubarTile;