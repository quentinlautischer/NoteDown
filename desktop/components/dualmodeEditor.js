import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Renderer from './renderer';
import TocNav from './tocNav';

var shared = require('../../shared/parser.js');
class DualmodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rendered_content: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.loadCurrentPage = this.loadCurrentPage.bind(this);
  }

  componentWillMount() {
    if (this.props.notes.userid != null) {
      this.loadCurrentPage(this.props.state.currentFolderid, this.props.notes);
      this.handleChange;
    }
  }

  loadCurrentPage(folderid, notes) {
    console.log("Folderid: " + folderid + " Notes: " + JSON.stringify(notes));
    var pages = this.findFolderWithId(folderid, notes).pages;
    var content = pages[0].content;
    this.setState({
      content: content,
    });
  }

  findFolderWithId(folderid, notes) {
    var theFolder = notes.folders.filter(function( folder ) {
      return folder._id == folderid;
    });
    return theFolder[0];
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
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
    return (
      <div className="dualMode-container">
        <textarea id="userText" value={this.state.content} className="markdown-input-editor" onChange={this.handleChange}>
          {this.state.content}
        </textarea>
        <div className="render-container">
          <TocNav info={this.state.content} scrollTo={id => this.scrollTo(id)}/>
          <div id="renderField" className="markdown-output-renderer" 
            dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
          </div>
        </div>
      </div>
    );
  }

  parse(content) {
    var rendered = '';

    //Do Render Work
    rendered = shared.parse(content);

    this.setState({ rendered_content: rendered });
  }

  
}

export default DualmodeEditor;