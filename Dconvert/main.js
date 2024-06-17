const { app, BrowserWindow, ipcMain, dialog } = require("electron");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: "logo.ico",
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);
// Listen for the "show-message-box" event
ipcMain.on("show-message-box", (event, args) => {
  dialog.showMessageBox(null, args);
});
