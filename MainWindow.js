const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysTop',
      width: isDev ? 1000 : 355,
      height: 500,
      show: false,
      opacity: 0.9,
      icon: `${__dirname}/assets/icons/icon.png`,
      resizable: isDev ? true : false,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    if (isDev) {
      this.webContents.openDevTools();
    }

    this.loadFile(file);
  }
}

module.exports = MainWindow;
