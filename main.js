const electron = require('electron');
const {app, BrowserWindow, globalShortcurt} = electron;

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setMenuBarVisibility(false)
    mainWindow.setTitle('Youtube');
    mainWindow.loadURL('https://youtube.com/', {userAgent: 'Chrome'})

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
