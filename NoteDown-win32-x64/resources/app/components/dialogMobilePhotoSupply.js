import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuTextField from './menuTextField';
import MenuButton from './menuButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var fs = require("fs");

class PreviewThumbnail extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(`Thumnail printing state: ${this.props.store.getState().state}`);
    console.log(this.props.store.getState().state);
    return (
      <img src={`data:image/jpeg;base64, ${this.props.store.getState().state.photoAlert.photo}`} width="300px" height="250px"/>
    );  
  }
}


class DialogMobilePhotoSupply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.insertPhoto = this.insertPhoto.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  insertPhoto() {
    var state = this.props.store.getState();
    console.log(state);

    var content = "";
    var label = this.state.value;
    var guid = this.guid();
    var store = this.props.store;
    if (state.state.userid) {
      content = `![${label}](@:${guid})`;
      store.dispatch({
        type: 'ADD_PHOTO',
        name: label,
        guid: guid,
        data: state.state.photoAlert.photo,
        folderIndex: state.state.folderIndex,
        pageIndex: state.state.pageIndex
      });
    }

    this.props.codeMirror.replaceSelection(content);

    this.props.close();
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
        label="Insert"
        primary={true}
        keyboardFocused={false}
        onTouchTap={() => this.insertPhoto()}
      />
    ];

    return (
      <MuiThemeProvider>
        <div className="dialog">
          <Dialog
            title="Mobile Photo Insert"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={() => this.props.close()}
          >
          <PreviewThumbnail 
            store={this.props.store}
          />
            <MenuTextField  
              hintStyle={{ textAlign: 'left' }} 
              hintText={"Photo Label"}
              value={this.state.value}
              onChange={this.handleChange}
              primary={true}
              keyboardFocused={true}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DialogMobilePhotoSupply;