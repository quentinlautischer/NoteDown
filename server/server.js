var mongoose = require('mongoose');
var Account = require('../shared/models/account')
var Notes = require('../shared/models/notes')
var Image = require('../shared/models/image')
var Folder = require('../shared/models/folder')
var Page = require('../shared/models/page')

const net  = require('net');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var HOST = '127.0.0.1';
var PORT = 3000;


/******************************************************************************/
var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(PORT, HOST, () => console.log('listening on ' + HOST + ":" + PORT));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);

    socket.on('request-login', (data) => {
      loginRequest(socket, data);
    });

    socket.on('request-signup', (data) => {
        signupRequest(socket, data);
    });

    socket.on('request-pull-data', (data) => {
      pullDataRequest(socket, data);
    });

    socket.on('request-push-data', (data) => {
      pushDataRequest(socket, data);
    });

    socket.on('request-photo', (data) => {
      photoRequest(socket, data);
    });

    socket.on('request-photo-supply', (data) => {
      photoSupplyRequest(socket, data);
    });

});

websocket.on('close', (socket) => {
  console.log('A client just closed on', socket.id);
});

db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
});

//
//     // var account = new Account({
//     //   email: 'lalala@gmail.com',
//     //   name: 'lala',
//     //   password: '123'
//     // });
//
//     // account.save(function (err, account) {
//     //   if (err) return console.error(err);
//     //   console.log('db save of account: sucess');
//
//     //   Account.find(function (err, account) {
//     //     if (err)
//     //       return console.error(err);
//     //     console.log('Accounts: ' + account);
//     //   });
//     // });
//   });




loginRequest = function(socket, data) {
  console.log('login-request');
  console.log("Username: " + data.username);
  console.log("Password: " + data.password);

  //Verify in DB
  setTimeout(function() {
    console.log("sending login response");
    const event = {event: "request-login-response", data: {result: true, userid: "lautisch"}};
    socket.emit('data', event);
  }, 1);
}

signupRequest = function(socket, data) {
  console.log('signup-request');
  console.log("Username: " + data.username);
  console.log("Password: " + data.password);
  console.log("Email: " + data.email);

   //Verify in DB
  setTimeout(function() {
    console.log("sending signup response");
    const event = {event: "request-signup-response", data: {result: true, userid: "lautisch"}};
    socket.write(JSON.stringify(event));
  }, 3000);
}

pullDataRequest = function(socket, data) {
  console.log('pull-data-request');
  console.log("userid: " + data.userid);

  var notes = new Notes({
    userid: "lautisch",
    folders: [
      new Folder({
        name: "Folder 1",
        pages: [
          new Page({
            content: "# Page 1 Content \n* Item 1\n* Item 2\n \n \n ## Header 2 \n ### Header 3"
          }),
          new Page({
            content: "Page 2 Content"
          }),
          new Page({
            content: "Page 3 Content"
          })
        ]
      }),
      new Folder({
        name: "Folder 2",
        pages: [
          new Page({
            content: "Page Content"
          })
        ]
      }),
    ],
    images: [new Image()]
  });

  const event = {event: "request-pull-data-response", data: {notes: notes}};
  socket.emit('data', event);
}

pushDataRequest = function(socket, data) {
  console.log('push-data-request')
}

photoRequest = function(socket, data) {
  console.log('photo-request');
}

photoSupplyRequest = function(data) {
  console.log('photo-supply-request');
}
