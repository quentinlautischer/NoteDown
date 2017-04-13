/*
Relevant requirements:
- FU-6: Desktop: Folder System: Creation
- FU-7: Desktop: Folder System: Deletion
- FU-10: Desktop: Editor: Dual Mode Edit
- FU-12: Desktop: Editor: Add Page
- FU-29: Mobile: Editor: Quick Edit
- FU-21: Mobile: Flashcards: Rank
- FU-30: Mobile: Editor: Save
- FU-31: Mobile and Desktop: Camera Mode
*/

import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'


function setNotes(state, action){
  console.log(`Setting Notes:`);
  console.log(action.notes);
  return action.notes;
}

function updateFlashcardRanksInNotes(state, action){
    var newNotes = state.notes;
    var folderIndex = action.flashcards.index;
    var flashcardList = action.flashcards.flashcards;
    var folderPages = state.folders[folderIndex].pages;

    var newPages = []; // will replace old pages after updates
    folderPages.forEach((page) => {
        var newPageContent = page.content;
        flashcardList.forEach((card) => {
            var hintsRegEx = card.hints.join('\\|'); // escape | bc it means 'or' in regex
            var backRegEx = card.back.join('\\|');
            var hints = card.hints.join('|');
            var back = card.back.join('|');
            var replaceMe = `{${card.front}\\|rank:[123]}\\s{${hintsRegEx}}\\s{${backRegEx}}`;
            var replacePatt = new RegExp(replaceMe);
            var replaceBy = `{${card.front}|rank:${card.rank}}\n{${hints}}\n{${back}}`;

            newPageContent = newPageContent.replace(replacePatt, replaceBy);
        });
        newPages.push({
            content: newPageContent,
            _id: page._id,
            images: page.images
        });
    });

    return update(state, {
      folders: {
        [folderIndex]: {
          pages: {$set : newPages}
        }
      }
  });
}

function addFolder(state, action){
  console.log(`adding folder: ${action.folder}`);
  return update(state, { folders: {$push: [action.folder]}});
}

function deleteFolder(state, action){
  console.log(`deleting folder at index: ${action.index}`)
  return update(state, { folders: {$splice: [[action.index, 1]]} });
}

function addPage(state, action){
  const page = { content: "", images: [] };
  return update(state, {
    folders: {
      [action.folderIndex]: {
        pages: {$splice: [[action.index, 0, page]]}
      }
    }
  });
}

function deletePage(state, action){
  return update(state, {
    folders: {
      [action.folderIndex]: {
        pages: {$splice: [[action.index, 1]]}
      }
    }
  });
}

function pageContentChange(state, action){
  var time1 = new Date().getTime();
  state = update(state, {
    folders: {
      [action.folderIndex]:{
        pages: {
          [action.pageIndex]:{
            content: {$set : action.content}
          }
        }
      }
    }
  });
  var time2 = new Date().getTime();
  console.log(`Update Setting new page content: ${time2-time1} ms or ${(time2-time1) / 1000} seconds`);
  return state;
}

function updatePageSavedContent(state, action) {
  return update(state, {
    folders: {
      [action.folderIndex]:{
        pages: {
          [action.pageIndex]:{
            savedContent: {$set : action.content}
          }
        }
      }
    }
  });
}

function addPhoto(state, action) {
  const image = { name: action.name, guid: action.guid, data: action.data };
  return update(state, {
    folders: {
      [action.folderIndex]:{
        pages: {
          [action.pageIndex]:{
            images: {$push : [image]}
          }
        }
      }
    }
  });
}

const initial_state = {
  userid: null,
  images: [],
  folders: []
}

const notesReducer = createReducer(initial_state, {
  'SET_NOTES': setNotes,
  'ADD_FOLDER': addFolder,
  'DELETE_FOLDER': deleteFolder,
  'ADD_PAGE': addPage,
  'DELETE_PAGE': deletePage,
  'PAGE_CONTENT_CHANGE': pageContentChange,
  'UPDATE_PAGE_SAVED_CONTENT': updatePageSavedContent,
  'ADD_PHOTO': addPhoto,
  'SAVE_CARDS': updateFlashcardRanksInNotes
});

export default notesReducer;
