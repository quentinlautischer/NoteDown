import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Renderer from './renderer';
var shared = require('../../shared/parser.js');
class DualmodeEditor extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      content: 'Nothing',
      rendered_content: 'Nothing'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    return {
      content: 'Nothing',
      rendered_content: 'Nothing'
    }
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
    this.parse();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <textarea id="userText" value={this.state.content} className="markdown-input-editor" onChange={this.handleChange}>
                    {this.state.content}
                  </textarea>
                </td>
                <td>
                  <div id="renderField" className="markdown-output-renderer" 
                  dangerouslySetInnerHTML= {{__html: this.state.rendered_content}}>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </MuiThemeProvider>
    );
  }

  parse() {
    var content = this.state.content;
    var rendered = '';

    //Do Render Work
    rendered = shared.parse(content);

    this.setState({ rendered_content: rendered });
  }

  
}

export default DualmodeEditor;