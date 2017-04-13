import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class FolderView extends React.Component {
  render() {
    return (
      <div className="folder-view">{this.props.name}
      </div>
    );
  }
}

export default FolderView;