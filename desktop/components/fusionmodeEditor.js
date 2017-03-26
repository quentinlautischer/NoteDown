import React from 'react';
import TextField from 'react';

import Renderer from './renderer';
import TocNav from './tocNav';
import DialogFileDrag from './dialogFileDrag';
import FormatToolbar from './formatToolbar'

import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

var shared = require('../../shared/parser.js');

class FusionmodeEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      fileDragDialogOpen: false,
      fileDragEventFilepath: "",
      rendered_content: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.storeDidUpdate = this.storeDidUpdate.bind(this);
    this.drop = this.drop.bind(this);
  }

  componentDidMount(){
    this.props.store.subscribe( this.storeDidUpdate );
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
    this.parse(this.getContent());
  }

  handleChange(e) {
    // If there is no selection, you can use the properties .selectionStart or .selectionEnd (with no selection they're equal).
    var cursorPosition = 0//e.target.selectionStart;
    this.props.store.dispatch({type: 'CURSOR_CHANGE', position: cursorPosition});
    console.log(`cursor position: ${this.props.store.getState().editor.cursor_position}`);

    this.updateContent(e.target.value);
    this.parse(e.target.value);
  }

  updateContent(content) {
    this.props.store.dispatch({type: 'PAGE_CONTENT_CHANGE', 
      content: content, 
      folderIndex: this.props.store.getState().state.folderIndex,
      pageIndex: this.props.store.getState().state.pageIndex
    });
    this.request_push_data();
  }

  openFileDragDialog() {
    this.setState({fileDragDialogOpen: true,});
  }

  closeFileDragDialog() {
    this.setState({fileDragDialogOpen: false,});
  }

  request_push_data() {
    console.log("requesting data push");
    var state = this.props.store.getState();
    const data = {userid: state.state.userid, notes: state.notes};
    ipc.send('request-push-data', data);
  }

  scrollTo(id) {
    console.log("scrolling to id: " + id);
    var element_to_scroll_to = document.getElementById(id);
    if (element_to_scroll_to) {
      element_to_scroll_to.scrollIntoView();
    }
  }

  getContent() {
    var state = this.props.store.getState();
    return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
  }

  parse(content) {
    var rendered = shared.parse(content, this.props.store, function() {return ""});
    this.setState({ rendered_content: rendered });
  }

  drop(e) {
    e.preventDefault();

    var path = "";
    try {
      for (let f of e.dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path)
        path = f.path;
      }  
    } catch (e) {
      console.log('error with dropped file');
    }


    this.setState({
      fileDragDialogOpen: true,
      fileDragEventFilepath: path,
    });
    
    return false;
  }

  render() {
    return (
      <div className="fusionmode-container"
        onDragOver={this.preventDefault}
        onDragLeave={this.preventDefault}
        onDragEnd={this.preventDefault}
        onDrop={this.drop}
      >
        <FormatToolbar />
        <div id='editor' className="fusion-editor" contentEditable="true">
          <h1>A WYSIWYG Editor.</h1>
          <p>Try making some changes here. Add your own text or maybe an image.</p>
        </div>
        <DialogFileDrag
          open={this.state.fileDragDialogOpen} 
          close={() => this.closeFileDragDialog()}
          filepath={this.state.fileDragEventFilepath}
          store={this.props.store} 
        />
      </div>
    );
  }
  
}

export default connect()(FusionmodeEditor);