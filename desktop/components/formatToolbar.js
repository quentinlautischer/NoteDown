import React from 'react';
import TextField from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class FormatToolbar extends React.Component {
  constructor() {
    super();

    this.setHeader = this.setHeader.bind(this);
    this.setParagraph = this.setParagraph.bind(this);
    this.setBlockquotethis = this.setBlockquote.bind(this);
    this.setBold = this.setBold.bind(this);
    this.setItalic = this.setItalic.bind(this);
    this.insertLink = this.insertLink.bind(this);
    this.insertPhoto = this.insertPhoto.bind(this);
    this.insertHorizontalRule = this.insertHorizontalRule.bind(this);
    this.insertOrderedList = this.insertOrderedList.bind(this);
    this.insertUnorderedList = this.insertUnorderedList.bind(this);
  }

  setHeader(num) {
    var text = "";
    for(var i=0;i<num;i++){
      text += '#';
    }
    this.props.insertShortcutText(text, true);
  }

  setParagraph() {
    this.props.insertShortcutText(`p`, true);
  }

  setBlockquote() {
    this.props.insertShortcutText(`blockquote`, true);
  }

  setBold() {
    console.log("Bolding")
    this.props.insertShortcutText(`bold`, true);
  }

  setItalic() {
    this.props.insertShortcutText(`italic`, true);
  }

  insertLink() {
    url = prompt('Enter the link here: ', 'http:\/\/');
    this.props.insertShortcutText(`createlink`, true);
  }

  insertPhoto() {
    url = prompt('Enter the link here: ', 'http:\/\/');
    this.props.insertShortcutText(`insertimage`, true);
  }

  insertHorizontalRule() {
    this.props.insertShortcutText(`insertHorizontalRule`, true);
  }

  insertOrderedList() {
    this.props.insertShortcutText(`insertOrderedList`, true);
  }

  insertUnorderedList() {
    this.props.insertShortcutText(`insertUnorderedList`, true);
  }
 
  //code, flashcards and tables.


  render() {
    if (!this.props.hidden) {
      return (
        <div className="format-toolbar">
          <a href="#" data-command='bold' onClick={() => this.setBold()}><i className='fa fa-bold'></i></a>
          <a href="#" data-command='italic' onClick={() => this.setBold()}><i className='fa fa-italic'></i></a>
          <a href="#" data-command='insertUnorderedList' onClick={() => this.insertUnorderedList()}><i className='fa fa-list-ul'></i></a>
          <a href="#" data-command='insertOrderedList' onClick={() => this.insertOrderedList()}><i className='fa fa-list-ol'></i></a>
          <a href="#" data-command='h1' onClick={() => this.setHeader(1)}>H1</a>
          <a href="#" data-command='h2' onClick={() => this.setHeader(2)}>H2</a>
          <a href="#" data-command='h3' onClick={() => this.setHeader(3)}>H3</a>
          <a href="#" data-command='h4' onClick={() => this.setHeader(4)}>H4</a>
          <a href="#" data-command='h5' onClick={() => this.setHeader(5)}>H5</a>
          <a href="#" data-command='h6' onClick={() => this.setHeader(6)}>H6</a>
          <a href="#" data-command='p' onClick={() => this.setParagraph()}>P</a>
          <a href="#" data-command='blockquote' onClick={() => this.setBlockquote()}><i className='fa fa-indent'></i></a>
          <a href="#" data-command='horizontalRule' onClick={() => this.insertHorizontalRule()}><i className='fa fa-minus'></i></a>
          <a href="#" data-command='createlink' onClick={() => this.insertLink()}><i className='fa fa-link'></i></a>
          <a href="#" data-command='insertimage' onClick={() => this.insertPhoto()}><i className='fa fa-image'></i></a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FormatToolbar;