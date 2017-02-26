var mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
  email: {type: String, unique: true, index: true },
  name: String,
  password: String,
});

module.exports = mongoose.model('Account', accountSchema);