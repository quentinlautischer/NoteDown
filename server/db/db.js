var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    assert = require('assert');

var db = new Db('test', new Server('localhost', 27017));

db.open(function(err, db) {
  assert.equal(null, err);

  db.on('close', test.done.bind(test));
  db.close();
});