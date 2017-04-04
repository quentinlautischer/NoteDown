import React from 'react';
import TextField from 'react';

import Renderer from './renderer';
import TocNav from './tocNav';
import DialogFileDrag from './dialogFileDrag';
import DialogMobilePhotoSupply from './dialogMobilePhotoSupply';
import FormatToolbar from './formatToolbar';


import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

var shared = require('../../shared/parser.js');

var hljs = require('highlight.js');
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class DualmodeEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      fileDragDialogOpen: false,
      fileDragEventFilepath: "",
      rendered_content: ""
    }

    this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    this.storeDidUpdate = this.storeDidUpdate.bind(this);
    this.drop = this.drop.bind(this);
    this.parse = this.parse.bind(this);

    this.codeMirror = null;
    this.unsubscribe = null;
  }

  componentDidMount(){
    hljs.initHighlightingOnLoad();
    this.unsubscribe = this.props.store.subscribe( this.storeDidUpdate );
    this.codeMirror = this.refs.editor.getCodeMirror();
    this.parse(this.getContent());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
    this.parse(this.getContent());
  }

  handleCodeMirrorChange(codeMirrorInstance, changeObj) {
    this.updateContent(codeMirrorInstance);
    this.parse(codeMirrorInstance);
  }

  updateContent(content) {
    this.props.store.dispatch({type: 'PAGE_CONTENT_CHANGE', 
      content: content, 
      folderIndex: this.props.store.getState().state.folderIndex,
      pageIndex: this.props.store.getState().state.pageIndex
    });
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
    var element_to_scroll_to = document.getElementById(id);
    if (element_to_scroll_to) {
      element_to_scroll_to.scrollIntoView();
    }
  }

  getContent() {
    var state = this.props.store.getState();
    return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
  }

  getContentImages() {
    var state = this.props.store.getState();
    return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].images;
  }

  parse(content) {
    var imageMapper = function(guid, store){
      var state = store.getState();
      var images = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].images;
      var i;
      for(i = 0; i < images.length; i++) {
        if (images[i].guid == guid) {
          return images[i].data;
        }
      }
    }

    var rendered = shared.parse(content, this.props.store, imageMapper);
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
    var options = {
      lineNumbers: true,
      mode: 'markdown',
      theme: 'duotone-light'
    };
    hljs.initHighlighting();
    return (
      <div className="dualMode-container"
        onDragOver={this.preventDefault}
        onDragLeave={this.preventDefault}
        onDragEnd={this.preventDefault}
        onDrop={this.drop}
      >
        <CodeMirror 
          ref="editor"
          className="markdown-input-editor" 
          value={this.getContent()} 
          onChange={this.handleCodeMirrorChange}
          options={options}
        />

        <div className="render-container">
          <div id="renderField" className="markdown-output-renderer" 
            dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
          </div>
           <div className="toc-nav-show"><i className="icon-bars" aria-hidden="true"></i></div>
          <TocNav   
            store={this.props.store}
            info={this.state.rendered_content} 
            scrollTo={id => this.scrollTo(id)}
          />
        </div>
        <DialogFileDrag
          open={this.state.fileDragDialogOpen} 
          close={() => this.closeFileDragDialog()}
          filepath={this.state.fileDragEventFilepath}
          store={this.props.store}
          codeMirror={this.codeMirror}
        />
        <DialogMobilePhotoSupply
          open={this.props.store.getState().state.photoAlert.open || false} 
          close={() => this.props.store.dispatch({type: 'CLOSE_PHOTO_ALERT'})}
          store={this.props.store}
          codeMirror={this.codeMirror}
        />
      </div>
    );
  }
  
}

export default connect()(DualmodeEditor);