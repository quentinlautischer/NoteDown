var mongoose = require('mongoose');
var Account = require('../shared/models/account')

const net  = require('net');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var HOST = '127.0.0.1';
var PORT = 3000;

net.createServer(function(sock) {

  console.log('Connected: ' + sock.remoteAddress + ':' + sock.remotePort);

  sock.on('data', function(data) {
    console.log('I got your msg: ' + data);
    
    var account = new Account({
      email: 'lalala@gmail.com',
      name: 'lala',
      password: '123'
    });

    account.save(function (err, account) {
      if (err) return console.error(err);
      console.log('db save of account: sucess');

      Account.find(function (err, account) {
        if (err)
          return console.error(err);
        console.log('Accounts: ' + account);
      });
    });

    sock.write('Login Granted');
  });

  sock.on('close', function(data) {
    console.log('Closed: ' + sock.remoteAddress + ':' + sock.remotePort)
  })

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
    

  });

}).listen(PORT, HOST);

console.log('Server listening on: ' + HOST +':'+ PORT);