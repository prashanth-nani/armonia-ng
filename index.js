const path = require('path');
const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', function(){
    mainWindow = new BrowserWindow();

    mainWindow.loadURL(path.join("file://", __dirname, "dist", "index.html"));

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});