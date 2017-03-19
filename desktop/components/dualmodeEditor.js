import React from 'react';
import TextField from 'react';

import Renderer from './renderer';
import TocNav from './tocNav';

import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

var shared = require('../../shared/parser.js');

class DualmodeEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false, 
      rendered_content: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.storeDidUpdate = this.storeDidUpdate.bind(this);
  }

  componentDidMount(){
    this.props.store.subscribe( this.storeDidUpdate );
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
  }

  handleChange(e) {
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
    var rendered = '';
    rendered = shared.parse(content);
    this.setState({ rendered_content: rendered });
  }

  render() {
    console.log("rendering dual mode");
    return (
      <div className="dualMode-container">
        <textarea id="userText" value={this.getContent()} className="markdown-input-editor" onChange={this.handleChange}>
          {this.getContent()}
        </textarea>
        <div className="render-container">
          <TocNav info={this.getContent()} scrollTo={id => this.scrollTo(id)}/>
          <div id="renderField" className="markdown-output-renderer" 
            dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
          </div>
        </div>
      </div>
    );
  }
  
}

export default connect()(DualmodeEditor);