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

function setFlashcardIndex(state, action) {
  return Object.assign({}, state, {currentIndex: action.currentIndex});
}

function setFlashcardFolders(state, action) {
  return Object.assign({}, state, {flashcardFolders: action.flashcardFolders});
}

function setFlashcardStep(state, action) {
  return Object.assign({}, state, {step: action.step});
}

const initial_state = {
  flashcards: [],
  flashcardFolders: [],
  currentIndex: 0
}

const flashcardReducer = createReducer(initial_state, {
  'NEXT_FLASHCARD': nextFlashcard,
  'PREV_FLASHCARD': prevFlashcard,
  'SET_FLASHCARDS': setFlashcards,
  'SET_FLASHCARD_FOLDERS': setFlashcardFolders,
  'SET_FLASHCARD_INDEX': setFlashcardIndex,
  'SET_FLASHCARD_STEP': setFlashcardStep
});

export default flashcardReducer;
