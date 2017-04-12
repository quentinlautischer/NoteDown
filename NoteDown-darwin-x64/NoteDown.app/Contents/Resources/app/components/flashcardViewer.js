import React from 'react';
import TextField from 'react';
import MenuButton from './menuButton';

import { connect } from 'react-redux';

var ipc = require('electron').ipcRenderer;

var shared = require('./shared/parser.js');

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
    this.applyFlashcardsHanlders();
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

  componentDidUpdate() {
    this.applyFlashcardsHanlders();
  }

  applyFlashcardsHanlders() {
    var cards = document.getElementsByClassName('card');
    var i;
    for (i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "red";
    }
  }

  render() {
    console.log(JSON.stringify(this.props.store.getState().flashcards.flashcards));
    console.log(JSON.stringify(this.props.store.getState().flashcards.flashcards[this.props.store.getState().flashcards.currentIndex]));
    var flashcard = this.props.store.getState().flashcards.flashcards[this.props.store.getState().flashcards.currentIndex];
    return (
      <div className="flashcard-viewer">
        <MenuButton className="prev-card-btn" label="Prev" onClick={() => this.prevCard()} />
        <div className="card-container">
          <div className="card-flipper">
            <div className="front">{flashcard.front}</div>
            <div className="back">{flashcard.back}</div>
          </div>
          <div className="hint-btn"><i className="icon-lightbulb"/></div>
          <div className="hint">{flashcard.hint}</div>
        </div>
        <MenuButton className="next-card-btn" label="Next" onClick={() => this.nextCard()} />      
      </div>
    );
  }
  
}

export default FlashcardViewer;