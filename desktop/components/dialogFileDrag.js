import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuTextField from './menuTextField';
import MenuButton from './menuButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    console.log(`ext: ${ext}`);
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

  insertPhoto() {
    var state = this.props.store.getState();
    var cursor_pos = state.editor.cursor_position;
    var currentContent = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
    
    // var content = "";
    // var sample = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    // if (state.state.userid) {
    //   content = `${currentContent.slice(0, cursor_pos)}<img width="350px" alt="${this.state.value}" src="data:image/jpeg;base64, ${sample}" />${currentContent.slice(cursor_pos)}`;
    // } else {
    //   content = `${currentContent.slice(0, cursor_pos)}![${this.state.value}](${this.props.filepath})${currentContent.slice(cursor_pos)}`;
    // }
    
    var content = "";
    if (state.state.userid) {
      content = `${currentContent.slice(0, cursor_pos)}![label](@:24)${currentContent.slice(cursor_pos)}`;
    } else {
      content = `${currentContent.slice(0, cursor_pos)}![${this.state.value}](${this.props.filepath})${currentContent.slice(cursor_pos)}`;
    }


    this.props.store.dispatch({
      type: 'INSERT_IMAGE',
      
    });

    this.props.store.dispatch({ 
      type: 'PAGE_CONTENT_CHANGE', 
      content: content,
      folderIndex: state.state.folderIndex,
      pageIndex: state.state.pageIndex
    });
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
        <div>
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