const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const ipcMain = require('electron').ipcMain;
const net = require('net');

var HOST = '127.0.0.1';
var PORT = '3000';
var client = new net.Socket();

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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('request-login', (event, data) => {
  console.log('Main Process received login request: ' + data.username + ' ' + data.password);

  client.connect(PORT, HOST, function() {
    console.log('Connected');
    const event = {event: "request-login", data: data};
    client.write(JSON.stringify(event));
  });
})

ipcMain.on('request-signup', (event, data) => {
  console.log('Main Process received signup request: ' + data);

  client.connect(PORT, HOST, function() {
    console.log('Connected');
    const event = {event: "request-signup", data: data};
    client.write(JSON.stringify(event));
  });
})

ipcMain.on('request-pull-data', (event, arg) => {
  console.log('Main Process received pull-data request');
  const data = {event: "request-pull-data", data: arg};
  client.write(JSON.stringify(data));
})

process.on('uncaughtException', function (error) {
  console.log("Error occured: " + error);
  mainWindow.webContents.send('error-toast', error.message);
});

client.on('data', function(data) {
  console.log('Raw response data: ' + data);
  var response = JSON.parse(data);

  console.log("Response Event: " + response.event);
  mainWindow.webContents.send(response.event, response.data);
})

client.on('close', function(){
  console.log('Connection closed');
});
