const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        // icon
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true,
            contextIsolation: false,
            devTools: true,
            allowRunningInsecureContent: true
        }
    })

    win.loadFile(__dirname + '/src/index.html');
}

app.whenReady().then( () => {
    console.log('Software running');
    createWindow()
} )