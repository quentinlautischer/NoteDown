const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const ipcMain = require('electron').ipcMain;
const http = require('http');

// var HOST = '127.0.0.1';
var HOST = 'localhost'; // allows me to test on android
var PORT = '3000';
var io = require('socket.io-client');

var socket;

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1200, height: 800})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    client.destroy();
    mainWindow = null
  })

  initServerComm();
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

function initServerComm() {
  socket = io('http://' + HOST + ':' + PORT);

  socket.on('data', (data) => {
    console.log('received data from server');
    mainWindow.webContents.send(data.event, data.data);
  });
}

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

process.on('uncaughtException', function (error) {
  console.log("Error occured: " + error);
  mainWindow.webContents.send('error-toast', error.message);
});
