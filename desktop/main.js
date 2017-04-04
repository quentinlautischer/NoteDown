const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const ipcMain = require('electron').ipcMain;
const http = require('http');

// var HOST = '127.0.0.1';
var HOST = 'localhost'; // allows me to test on android
// var HOST  = 'https://mighty-garden-9993.herokuapp.com/'
var PORT = '3000';
var io = require('socket.io-client');


var mongoose = require('mongoose');
var Account = require('../shared/models/account')
var Notes = require('../shared/models/notes')
var Image = require('../shared/models/image')
var Folder = require('../shared/models/folder')
var Page = require('../shared/models/page')

var socket;

let mainWindow

function createWindow () {
  
  if (process.platform !== 'darwin') {
    mainWindow = new BrowserWindow({width: 1000, height: 700, minWidth: 500, minHeight: 450, frame: false})
  } else {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden', width: 1000, height: 700, minWidth: 500, minHeight: 450}) 
  }

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    closeSocket();
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('maximize', function () {

})

function initServerComm() {
  console.log('initializing socket');
  socket = io('http://' + HOST + ':' + PORT);
  // socket = io(HOST);

  socket.on('data', (data) => {
    console.log(`received data event (${data.event}) from server`);
    mainWindow.webContents.send(data.event, data.data);
  });
}

ipcMain.on('initialize-socket', (event, data) => {
  initServerComm();
});

function closeSocket() {
  try {
    socket.destroy();  
  } catch(err) {
    console.log(`${err}`);
  }
}

ipcMain.on('close-socket', (event, data) => {
  closeSocket();
})

ipcMain.on('create-folder-request', (event, data) => {
  const folder = new Folder({
    name: data.name,
    pages: [
      new Page({
        content: "",
        images: []
      })
    ]
  });
  console.log(folder);  
  mainWindow.webContents.send('create-folder-response', {data: JSON.stringify(folder) });
});

ipcMain.on('request-login', (event, data) => {
  console.log('Main Process received login request: ' + data.username + ' ' + data.password);
  socket.emit('request-login', data);
})

ipcMain.on('request-signup', (event, data) => {
  console.log('Main Process received signup request: ' + data);
  socket.emit('request-signup', data);
})

ipcMain.on('request-pull-data', (event, data) => {
  console.log('Main Process received pull-data request');
  socket.emit('request-pull-data', data)
})

ipcMain.on('request-push-data', (event, data) => {
  console.log('Main Process received pull-data request');
  socket.emit('request-push-data', data)
})

ipcMain.on('server-error', (event, data) => {
  console.log(`ServerError: ${data.msg}`);
  mainWindow.webContents.send('error-toast', data);
})

ipcMain.on('quit', (event, data) => {
  app.quit();
});

ipcMain.on('maximize', (event, data) => {
  mainWindow.maximize();
  mainWindow.webContents.send('re-render');
});

ipcMain.on('unmaximize', (event, data) => {
  mainWindow.restore();
  mainWindow.webContents.send('re-render');
});

ipcMain.on('minimize', (event, data) => {
  mainWindow.minimize();
});

process.on('uncaughtException', function (error) {
  console.log("Error occured: " + error);
  mainWindow.webContents.send('error-toast', error.message);
});
