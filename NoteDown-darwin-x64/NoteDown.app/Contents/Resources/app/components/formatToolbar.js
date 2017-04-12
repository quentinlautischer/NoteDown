import React from 'react';
import TextField from 'react';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Popover  from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class FormatToolbar extends React.Component {
  constructor() {
    super();

    this.state = {
      openMenu: false,
      anchorEl: null,
    }

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
    this.insertCode = this.insertCode.bind(this);
    this.insertFlashcard = this.insertFlashcard.bind(this);
    this.insertTable = this.insertTable.bind(this);
    this.insertEquation = this.insertEquation.bind(this);

    this.handleOpenHeaderMenu = this.handleOpenHeaderMenu.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  setHeader(num) {
    var text = "";
    for(var i=0;i<num;i++){
      text += '#';
    }
    text += ` Header ${num}`
    this.props.insertShortcutText(text, true);
    this.handleRequestClose();
  }

  setParagraph() {
    this.props.insertShortcutText(``, true);
  }

  setBlockquote() {
    this.props.insertShortcutText(`> blockquote`, true);
  }

  setBold() {
    this.props.insertShortcutText(`__bold__`, true);
  }

  setItalic() {
    this.props.insertShortcutText(`_italic_`, true);
  }

  insertLink() {
    this.props.insertShortcutText(`[label](http://)`, true);
  }

  insertPhoto() {
    this.props.insertShortcutText(`![label](filepath)`, true);
  }

  insertHorizontalRule() {
    this.props.insertShortcutText(`***`, true);
  }

  insertOrderedList() {
    this.props.insertShortcutText(`1. List Item1\n2. List Item2`, true);
  }

  insertUnorderedList() {
    this.props.insertShortcutText(`* List Item1\n* List Item2`, true);
  }

  insertCode(){
    this.props.insertShortcutText('```python\ndef foo\n```', true)
  }

  insertFlashcard(){
    this.props.insertShortcutText(`{Flashcard Front}\n{Flashcard Hint1 | Flashcard Hint2}\n{Flashcard Back1 | Flashcard Back2}\n`, true)
  }
 
  insertTable(){
    var table =
    "|Table Header 1|Table Header 2|\n|--------------|--------------|\n| Row 1 Col 1  | Row 1 Col 2  |\n| Row 2 Col 1  | Row 2 Col 2  |\n"
    this.props.insertShortcutText(`${table}`, true)
  }

  insertEquation(){
    this.props.insertShortcutText('$$2^{2+1}=8$$\n')
  }

  //code, flashcards and tables.
  handleOpenHeaderMenu(event) {
    event.preventDefault();

    this.setState({
      openMenu: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      openMenu: false,
    });
  }


  render() {
    if (!this.props.hidden) {
      return (
        <div className="format-toolbar">
          <a className=""  onClick={() => this.setBold()}><i className='fa fa-bold'></i></a>
          <a className=""  onClick={() => this.setItalic()}><i className='fa fa-italic'></i></a>
          <a className=""  onClick={() => this.insertUnorderedList()}><i className='fa fa-list-ul'></i></a>
          <a className="right_margin"  onClick={() => this.insertOrderedList()}><i className='fa fa-list-ol'></i></a>
          <a className=""  onTouchTap={this.handleOpenHeaderMenu}><i className='fa fa-header'></i></a>
          <Popover  
            open={this.state.openMenu}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <MenuItem  value="1" onClick={() => this.setHeader(1)}>H1</MenuItem>
            <MenuItem  value="2" onClick={() => this.setHeader(2)}>H2</MenuItem>
            <MenuItem  value="3" onClick={() => this.setHeader(3)}>H3</MenuItem>
            <MenuItem  value="4" onClick={() => this.setHeader(4)}>H4</MenuItem>
            <MenuItem  value="5" onClick={() => this.setHeader(5)}>H5</MenuItem>
            <MenuItem  value="6" onClick={() => this.setHeader(6)}>H6</MenuItem>
          </Popover>
          <a className=""  onClick={() => this.setParagraph()}>P</a>
          <a className=""  onClick={() => this.setBlockquote()}><i className='fa fa-indent'></i></a>
          <a className="right_margin"  onClick={() => this.insertHorizontalRule()}><i className='fa fa-minus'></i></a>
          <a className=""  onClick={() => this.insertLink()}><i className='fa fa-link'></i></a>
          <a className=""  onClick={() => this.insertPhoto()}><i className='fa fa-image'></i></a>
          <a className="right_margin"  onClick={() => this.insertTable()}><i className='fa fa-table'></i></a>
          <a className=""  onClick={() => this.insertCode()}><i className='fa fa-code'></i></a>
          <a className=""  onClick={() => this.insertFlashcard()}><i className='icon-cards'></i></a>
          <a className=""  onClick={() => this.insertEquation()}>Eq</a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FormatToolbar;