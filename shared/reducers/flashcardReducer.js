import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'

function nextFlashcard(state, action) {
  if (state.currentIndex < state.flashcards.length){
    return Object.assign({}, state, {currentIndex: state.currentIndex + 1});
  }
  return state;
}

function prevFlashcard(state, action) {
  if (state.currentIndex > 0){
    return Object.assign({}, state, {currentIndex: state.currentIndex - 1});
  }
  return state;
}

function setFlashcards(state, action) {
  console.log(`flashcards set: ${action.flashcards}`)
  return Object.assign({}, state, {flashcards: action.flashcards});
}

const initial_state = {
  flashcards: [],
  currentIndex: 0
}

const flashcardReducer = createReducer(initial_state, {
  'NEXT_FLASHCARD': nextFlashcard,
  'PREV_FLASHCARD': prevFlashcard,
  'SET_FLASHCARDS': setFlashcards
});

export default flashcardReducer;
