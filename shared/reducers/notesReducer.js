import update from '../node_modules/immutability-helper';

import createReducer from './reducerUtilities'


function setNotes(state, action){
  console.log(`Setting Notes: ${action.notes}`);
  return action.notes;
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
  return update(state, {
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
  folders: [ {
      name: "Folder",
      pages: [
        {
          content: "",
          images: []
        }
      ]
    }
  ]
}

const notesReducer = createReducer(initial_state, {
  'SET_NOTES': setNotes,
  'ADD_FOLDER': addFolder,
  'DELETE_FOLDER': deleteFolder,
  'ADD_PAGE': addPage,
  'DELETE_PAGE': deletePage,
  'PAGE_CONTENT_CHANGE': pageContentChange,
  'UPDATE_PAGE_SAVED_CONTENT': updatePageSavedContent,
  'ADD_PHOTO': addPhoto
});

export default notesReducer;
