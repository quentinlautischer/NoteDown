import update from 'immutability-helper';

import createReducer from './reducerUtilities'

var fs = require("fs");

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
  const page = { content: "" };
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

function addPhoto(state, action) {
  // filepath, label,
  var filepath  = action.filepath;
  fs.readFile(filepath, 'binary', function(err, original_data){
    var base64Image = new Buffer(original_data, 'binary').toString('base64');
    
  })

  return
}

const initial_state = {
  userid: null, 
  images: [], 
  folders: [ {
      name: "Folder",
      pages: [
        {
          content: ""
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
  'ADD_PHOTO': addPhoto
});

export default notesReducer;