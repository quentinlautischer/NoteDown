import React from 'react';
import TextField from 'react';

import Renderer from './renderer';
import TocNav from './tocNav';

import { connect } from 'react-redux';

var shared = require('../../shared/parser.js');
class DualmodeEditor extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      rendered_content: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.loadCurrentPage = this.loadCurrentPage.bind(this);
  }

  componentWillMount() {
    console.log('DualmodeEditor ComponentWillMount');
    if (null) {
      this.loadCurrentPage(this.props.state.currentFolderid);
      this.handleChange;
    }
  }

  loadCurrentPage(folderid) {
    console.log("Folderid: " + folderid + " Notes: " + JSON.stringify(notes));
    var pages = this.props.findFolderWithId(folderid).pages;
    var content = pages[0].content;
    this.setState({
      content: content,
    });
  }

  handleChange(e) {
    this.props.updateContent(e.target.value);
    this.parse(e.target.value);
  }

  scrollTo(id) {
    console.log("scrolling to id: " + id);
    var element_to_scroll_to = document.getElementById(id);
    if (element_to_scroll_to) {
      element_to_scroll_to.scrollIntoView();
    }
  }

  render() {
    console.log("rendering dual mode");
    return (
      <div className="dualMode-container">
        <textarea id="userText" value={this.props.content} className="markdown-input-editor" onChange={this.handleChange}>
          {this.props.content}
        </textarea>
        <div className="render-container">
          <TocNav info={this.props.content} scrollTo={id => this.scrollTo(id)}/>
          <div id="renderField" className="markdown-output-renderer" 
            dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
          </div>
        </div>
      </div>
    );
  }

  parse(content) {
    var rendered = '';
    rendered = shared.parse(content);
    this.setState({ rendered_content: rendered });
  }

  
}

export default connect()(DualmodeEditor);