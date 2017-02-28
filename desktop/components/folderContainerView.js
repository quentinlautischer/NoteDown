import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FolderView from './folderView';

// {this.props.results.map(function(result) {
          //  return <FolderView key={result.id} result="item"/>;
          // })}

class FolderContainerView extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="folder-container-view">
          <FolderView name="Item1" />
        </div>
      </MuiThemeProvider>
    );
  }


  
}

export default FolderContainerView;