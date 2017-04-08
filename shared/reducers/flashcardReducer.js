import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'

function nextFlashcard(state, action) {
    return findNextCardWithHighEnoughRank(state);
}

function findNextCardWithHighEnoughRank(state) {
    var minRank = (state.showMediumDifficultyCards === true) ? 2 : 3;
    var numFlashcardsInFolder = state.flashcards[state.folderIndex].flashcards.length;

    for (var i = 1; i < numFlashcardsInFolder; i++) {
        var realIndex = (state.currentIndex + i) % numFlashcardsInFolder;
        if (state.flashcards[state.folderIndex].flashcards[realIndex].rank >= minRank) {
            if (state.currentIndex + i >= numFlashcardsInFolder) {
                // this is a loop-around; update showMediumDifficultyCards
                state = update(state, {
                    showMediumDifficultyCards: {$set: !state.showMediumDifficultyCards}
                });
            }
            return update(state, {
                currentIndex: {$set: realIndex}
            });
        }
    }
    // didn't find one
    // if we were hiding medium cards before, there might be one we can show if we toggle this
    if (minRank === 3) {
        return findNextCardWithHighEnoughRank(
            update(state, {showMediumDifficultyCards: {$set: true}})
        );
    }
    return update(state, {
        currentIndex: {$set: -1} // indicates no more cards to learn
    });
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
  currentIndex: 0,
  showMediumDifficultyCards: false
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
