const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const PageModel = require('./page')

// create a schema
const folderSchema = new mongoose.Schema({
  pages: [PageModel.schema]
});

// create the model
const folderModel = mongoose.model('Folder', folderSchema);

// export the model
module.exports = folderModel;