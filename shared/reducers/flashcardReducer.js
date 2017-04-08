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
  return Object.assign({}, state, {flashcards: action.flashcards});
}

function setFlashcardIndex(state, action) {
  return Object.assign({}, state, {currentIndex: action.currentIndex});
}

function selectFlashcardFolder(state, action) {
  return Object.assign({}, state, {flashcardFolderIndex: action.flashcardFolderIndex});
}

function setFlashcardStep(state, action) {
  return Object.assign({}, state, {step: action.step});
}

function rankFlashcard(state, action) {
    const folder = state.flashcardFolderIndex;
    const card = state.currentIndex;
    console.log(`reducer applying rank ${action.value} to (${folder},${card})`);
  return update(state, {
    flashcards: {
      [folder]: {
        flashcards: {
          [card]: {
            rank: {$set : action.value}
          }
        }
      }
    }
  });
}

const initial_state = {
  flashcards: [],
  flashcardFolderIndex: 0,
  currentIndex: 0
}

const flashcardReducer = createReducer(initial_state, {
  'NEXT_FLASHCARD': nextFlashcard,
  'PREV_FLASHCARD': prevFlashcard,
  'SET_FLASHCARDS': setFlashcards,
  'SELECT_FLASHCARD_FOLDER': selectFlashcardFolder,
  'SET_FLASHCARD_INDEX': setFlashcardIndex,
  'SET_FLASHCARD_STEP': setFlashcardStep,
  'RANK_FLASHCARD': rankFlashcard
});

export default flashcardReducer;
