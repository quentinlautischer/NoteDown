/*
Relevant requirements:
- FU-6: Desktop: Folder System: Creation
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuTextField from './menuTextField';
import MenuButton from './menuButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class DialogFolderCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={false}
        onTouchTap={() => this.props.close()}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.props.createFolder(this.state.value)}
      />
    ];

    return (
      <MuiThemeProvider>
        <div  className="dialog">
          <Dialog
            title="Create New Folder"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={() => this.props.close()}
          >
            <MenuTextField  
              hintStyle={{ textAlign: 'left' }} 
              hintText={"Folder Name"}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DialogFolderCreate;