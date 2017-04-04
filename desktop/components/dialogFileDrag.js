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

  extractFileExtension(filepath) {
    var re = /(?:\.([^.]+))?$/;
    var ext = re.exec(filepath)[1]; 
    return ext;
  }

  render() {
    var ext = this.extractFileExtension(this.props.filepath);
    if (ext == 'jpg' | ext == 'png') {
      return (
        <img src={this.props.filepath} width="300px" height="250px"/>
      );  
    } else if (ext == 'md') {
      return (
        <p>{this.props.filepath}</p> 
      );
    } else {
      return (
        <p>{this.props.filepath}</p>
      );
    }
    
  }
}


class DialogFileDrag extends React.Component {
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
    var cursor_pos = state.editor.cursor_position;
    var currentContent = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
    
    var content = "";
    var label = this.state.value;
    var guid = this.guid();
    var store = this.props.store;
    if (state.state.userid) {
      content = `![${label}](@:${guid})`;
      fs.readFile(this.props.filepath, 'binary', function(err, original_data){
        var base64Image = new Buffer(original_data, 'binary').toString('base64');
        store.dispatch({
          type: 'ADD_PHOTO',
          name: label,
          guid: guid,
          data: base64Image,
          folderIndex: state.state.folderIndex,
          pageIndex: state.state.pageIndex
        });
      });
    } else {
      content = `![${label}](${this.props.filepath})`;
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
            title="File Drag Dialog"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={() => this.props.close()}
          >
          <PreviewThumbnail 
            filepath={this.props.filepath}
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

export default DialogFileDrag;