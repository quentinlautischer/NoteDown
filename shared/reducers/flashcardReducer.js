import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'

function findFirstFlashcard(state, action) {
    return findNextCardWithHighEnoughRank(update(state, {currentIndex: {$set: -1}}));
}

function nextFlashcard(state, action) {
    return findNextCardWithHighEnoughRank(state);
}

function findNextCardWithHighEnoughRank(state) {
    var numFlashcardsInFolder = state.flashcards[state.flashcardFolderIndex].flashcards.length;

    var res = findNextInRange(state, state.currentIndex + 1, numFlashcardsInFolder);
    if (res !== null) {
        return res;
    }

    state = update(state, {showMediumDifficultyCards: {$set: !state.showMediumDifficultyCards}});
    var res = findNextInRange(state, 0, numFlashcardsInFolder);
    if (res !== null) {
        return res;
    }

    if (!state.showMediumDifficultyCards) {
        state = update(state, {showMediumDifficultyCards: {$set: !state.showMediumDifficultyCards}});
        var res = findNextInRange(state, 0, state.currentIndex + 1);
        if (res !== null) {
            return res;
        }
    }

    return update(state, {
        currentIndex: {$set: -1} // indicates no more cards to learn
    });
}

function findNextInRange(state, start, end) {
    var minRank = (state.showMediumDifficultyCards === true) ? 2 : 3;
    for (var i = start; i < end; i++) {
        if (state.flashcards[state.flashcardFolderIndex].flashcards[i].rank >= minRank) {
            return update(state, {
                currentIndex: {$set: i}
            });
        }
    }
    return null;
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

function mapFlashcardFolder(state, action) {
    for (var i = 0; i < state.flashcards.length; i++) {
        if (state.flashcards[i].index === action.notesFolder) {
            return Object.assign({}, state, {flashcardFolderIndex: i});
        }
    }
    // no fcs for folder
    return Object.assign({}, state, {flashcardFolderIndex: -1});
}

function revertRanks(state, action) {
    var len = state.flashcards[state.flashcardFolderIndex].flashcards.length;
    console.log("LEN " + len);
    for (var i = 0; i < len; i++) {
        state = update(state, {
            flashcards: {
                [state.flashcardFolderIndex]: {
                    flashcards: {
                        [i]: {
                            rank: {$set : 2}
                        }
                    }
                }
            }
        });
    }
    return state;
}

const initial_state = {
  flashcards: [],
  flashcardFolderIndex: 0,
  currentIndex: 0,
  showMediumDifficultyCards: true
}

const flashcardReducer = createReducer(initial_state, {
  'NEXT_FLASHCARD': nextFlashcard,
  'PREV_FLASHCARD': prevFlashcard,
  'SET_FLASHCARDS': setFlashcards,
  'SELECT_FLASHCARD_FOLDER': selectFlashcardFolder,
  'SET_FLASHCARD_INDEX': setFlashcardIndex,
  'SET_FLASHCARD_STEP': setFlashcardStep,
  'RANK_FLASHCARD': rankFlashcard,
  'MAP_FLASHCARD_FOLDER': mapFlashcardFolder,
  'FIND_FIRST_FLASHCARD': findFirstFlashcard,
  'REVERT_RANKS': revertRanks
});

export default flashcardReducer;
