import React from 'react';

import menubuilder from './menubar';
const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var ipc = require('electron').ipcRenderer;

class ButtonPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
        // <FormatButton name='format-bold' appendText='**text**' isBlock={false} appendFunction={this.props.func} />
        // <FormatButton name='format-italic' appendText='*text*' isBlock={false} appendFunction={this.props.func} />
        // <FormatButton name='format-header-1' appendText='# ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-header-2' appendText='## ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-header-3' appendText='### ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-header-4' appendText='#### ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-header-5' appendText='##### ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-header-6' appendText='###### ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-list-bulleted' appendText='* ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='format-list-numbers' appendText='1. ' isBlock={true} appendFunction={this.props.func} />
        // <FormatButton name='link-variant' appendText='[title](http://)' isBlock={false} appendFunction={this.props.func} />
    return (
      <div className="buttonPanel">

      </div>
    );
  }
}

export default ButtonPanel;