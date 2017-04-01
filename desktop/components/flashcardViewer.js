import React from 'react';
import TextField from 'react';
import MenuButton from './menuButton';

import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

var shared = require('../../shared/parser.js');

class FlashcardViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }

    this.getContent = this.getContent.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe( this.storeDidUpdate );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate(){
    this.setState({open: this.props.store.getState().sessionActive});
  }

  getContent() {
    var state = this.props.store.getState();
    return state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex].content;
  }

  prevCard() {
    this.props.store.dispatch({type: 'PREV_FLASHCARD'});
  }

  nextCard() {
    this.props.store.dispatch({type: 'NEXT_FLASHCARD'});
  }

  render() {
    console.log(JSON.stringify(this.props.store.getState().flashcards.flashcards));
    console.log(JSON.stringify(this.props.store.getState().flashcards.flashcards[this.props.store.getState().flashcards.currentIndex]));
    return (
      <div className="flashcard-viewer">
      <MenuButton label="Prev" onClick={() => this.prevCard()} />
      <div className="cards" 
        dangerouslySetInnerHTML= {{__html: this.props.store.getState().flashcards.flashcards[this.props.store.getState().flashcards.currentIndex]}}>
      </div>
      <MenuButton label="Next" onClick={() => this.nextCard()} />      
      </div>
    );
  }
  
}

export default FlashcardViewer;