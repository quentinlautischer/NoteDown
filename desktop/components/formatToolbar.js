import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class FormatToolbar extends React.Component {
  setHeader(num) {
    document.execCommand('formatBlock', false, `h${num}`);
  }

  setParagraph() {
    document.execCommand('formatBlock', false, `p`);
  }

  setBlockquote() {
    document.execCommand('formatBlock', false, `blockquote`);
  }

  setBold() {
    document.execCommand('bold', false, null);
  }

  setItalic() {
    document.execCommand('italic', false, null);
  }

  insertLink() {
    url = prompt('Enter the link here: ', 'http:\/\/');
    document.execCommand('createlink', false, url);
  }

  insertPhoto() {
    url = prompt('Enter the link here: ', 'http:\/\/');
    document.execCommand('insertimage', false, url);
  }

  insertHorizontalRule() {
    document.execCommand('insertHorizontalRule', false, null);
  }

  insertOrderedList() {
    document.execCommand('insertOrderedList', false, null);
  }

  insertUnorderedList() {
    document.execCommand('insertUnorderedList', false, null);
  }
 
  //code, flashcards and tables.


  render() {
    return (
      <div className="format-toolbar">
        <a href="#" data-command='bold' onClick={this.setBold}><i className='fa fa-bold'></i></a>
        <a href="#" data-command='italic' onClick={this.setBold}><i className='fa fa-italic'></i></a>
        <a href="#" data-command='insertUnorderedList' onClick={this.insertUnorderedList}><i className='fa fa-list-ul'></i></a>
        <a href="#" data-command='insertOrderedList' onClick={this.insertOrderedList}><i className='fa fa-list-ol'></i></a>
        <a href="#" data-command='h1' onClick={this.setHeader(1)}>H1</a>
        <a href="#" data-command='h2' onClick={this.setHeader(2)}>H2</a>
        <a href="#" data-command='h3' onClick={this.setHeader(3)}>H3</a>
        <a href="#" data-command='h4' onClick={this.setHeader(4)}>H4</a>
        <a href="#" data-command='h5' onClick={this.setHeader(5)}>H5</a>
        <a href="#" data-command='h6' onClick={this.setHeader(6)}>H6</a>
        <a href="#" data-command='p' onClick={this.setParagraph}>P</a>
        <a href="#" data-command='blockquote' onClick={this.setBlockquote}><i className='fa fa-indent'></i></a>
        <a href="#" data-command='horizontalRule' onClick={this.insertHorizontalRule}><i className='fa fa-minus'></i></a>
        <a href="#" data-command='createlink' onClick={this.insertLink}><i className='fa fa-link'></i></a>
        <a href="#" data-command='insertimage' onClick={this.insertPhoto}><i className='fa fa-image'></i></a>
      </div>
    );
  }
}

export default FormatToolbar;