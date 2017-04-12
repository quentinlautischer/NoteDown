// Before running these tests start the server from root with npm run server

require("babel-core").transform("code", {
  plugins: ["transform-async-to-generator"]
});

require("babel-polyfill");

const http = require('http');
var io = require('socket.io-client');
var socket;

var HOST = 'localhost';
var PORT = '3000';

beforeEach(() => {
  socket = io('http://' + HOST + ':' + PORT);
});

afterEach(() => {
  socket.destroy();
});

it('works with promises', async () => {
  const data = {userid: "lol", password: "lol"};
  socket.emit('request-login', data);

  await expect().resolves.toEqual('Paul');
});


// socket.on('data', (data) => {
//     console.log(`received data event (${data.event}) from server`);
//     mainWindow.webContents.send(data.event, data.data);
//   });

// ipcMain.on('request-login', (event, data) => {
//   console.log('Main Process received login request: ' + data.username + ' ' + data.password);
//   socket.emit('request-login', data);
// })

// ipcMain.on('request-signup', (event, data) => {
//   console.log('Main Process received signup request: ' + data);
//   socket.emit('request-signup', data);
// })

// ipcMain.on('request-pull-data', (event, data) => {
//   console.log('Main Process received pull-data request');
//   socket.emit('request-pull-data', data)
// })

// ipcMain.on('request-push-data', (event, data) => {
//   console.log('Main Process received pull-data request');
//   socket.emit('request-push-data', data)
// })

    // socket.on('request-login', (data) => {
    //   loginRequest(socket, data);
    // });

    // socket.on('request-signup', (data) => {
    //   signupRequest(socket, data);
    // });

    // socket.on('request-pull-data', (data) => {
    //   pullDataRequest(socket, data);
    // });

    // socket.on('request-push-data', (data) => {
    //   pushDataRequest(socket, data);
    // });

    // socket.on('request-photo', (data) => {
    //   photoRequest(socket, data);
    // });

    // socket.on('request-photo-supply', (data) => {
    //   photoSupplyRequest(socket, data);
    // });

    // socket.on('request-photo-put', (data) => {
    //   photoPutRequest(socket, data);
    // });