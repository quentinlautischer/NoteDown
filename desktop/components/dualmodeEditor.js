import React from 'react';
import TextField from 'react';

import Renderer from './renderer';
import TocNav from './tocNav';
import DialogFileDrag from './dialogFileDrag';
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
    this.handleChange = this.handleChange.bind(this);
    this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    this.storeDidUpdate = this.storeDidUpdate.bind(this);
    this.drop = this.drop.bind(this);

    this.unsubscribe = null;
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe( () => this.storeDidUpdate );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
    this.parse(this.getContent());
  }

  handleCodeMirrorChange(codeMirrorInstance, changeObj) {
    console.log(`Cursor Change Obj: ${JSON.stringify(changeObj)}`)
    this.updateContent(codeMirrorInstance);
    this.parse(codeMirrorInstance);
  }

  handleCursorChange(codeMirrorInstance) {
    
  }

  handleChange(e) {
    // If there is no selection, you can use the properties .selectionStart or .selectionEnd (with no selection they're equal).
    var cursorPosition = e.target.selectionStart;
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
    //this.request_push_data();
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
    hljs.initHighlighting();
    var options = {
      lineNumbers: true,
      mode: 'markdown',
      theme: 'duotone-light'
    };
    //console.log(hljs.highlight("python", '<pre><code class="python">def foo():</code></pre>', true));
    return (
      <div className="dualMode-container"
        onDragOver={this.preventDefault}
        onDragLeave={this.preventDefault}
        onDragEnd={this.preventDefault}
        onDrop={this.drop}
      >
        <CodeMirror 
          id="userText"
          className="markdown-input-editor" 
          value={this.getContent()} 
          onChange={this.handleCodeMirrorChange}
          options={options} 
        />

        <div className="render-container">
          <div className="toc-nav-show"><i className="icon-bars" aria-hidden="true"></i></div>
          <TocNav store={this.props.store} info={this.getContent()} scrollTo={id => this.scrollTo(id)}/>
          <div id="renderField" className="markdown-output-renderer" 
            dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
          </div>
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

export default connect()(DualmodeEditor);