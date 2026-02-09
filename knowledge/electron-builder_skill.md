---
name: electron-builder
description: Build cross-platform desktop applications with Electron.js using JavaScript, HTML, and CSS. Use when creating Windows, macOS, or Linux desktop apps, implementing auto-updaters, building installers (DMG, MSI, RPM), or distributing to app stores.
---

# Electron Builder Skill

Build cross-platform desktop apps with JavaScript, HTML, and CSS.

## Advanced References

- **Full API Guide**: See [electron-apis.md](references/electron-apis.md)
- **IPC Best Practices**: See [ipc-patterns.md](references/ipc-patterns.md)

## Quick Start

```bash
# Create new Electron app with Electron Forge
npx create-electron-app@latest my-app
cd my-app
npm start
```

## Project Structure

```text
my-app/
├── package.json
├── main.js          # Main process (Node.js)
├── preload.js       # Bridge between main/renderer
├── renderer.js      # Renderer process (browser)
└── index.html       # UI
```

## Core Concepts

### Main Process

- Runs in Node.js environment
- Manages app lifecycle, windows, native APIs
- Access to `BrowserWindow`, `Menu`, `dialog`, `Tray`

### Renderer Process

- Runs in Chromium browser
- Handles UI logic
- Communicates with main process via IPC

### IPC Communication

```javascript
// main.js
const { ipcMain } = require('electron');
ipcMain.handle('get-data', async () => {
  return await fetchData();
});

// preload.js
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  getData: () => ipcRenderer.invoke('get-data')
});

// renderer.js
const data = await window.api.getData();
```

## Native Features

### Menus

```javascript
const { Menu } = require('electron');
const template = [
  { label: 'File', submenu: [{ role: 'quit' }] }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(template));
```

### Dialogs

```javascript
const { dialog } = require('electron');
const result = await dialog.showOpenDialog({ properties: ['openFile'] });
```

### Notifications

```javascript
new Notification({ title: 'Hello', body: 'World' }).show();
```

## Auto-Updater

```javascript
const { autoUpdater } = require('electron-updater');
autoUpdater.checkForUpdatesAndNotify();
```

## Building & Distribution

```bash
# Build for current platform
npm run make

# Build installers
npx electron-builder --win --mac --linux
```

### Platform-specific outputs

- **Windows**: NSIS installer (.exe), MSI
- **macOS**: DMG, pkg
- **Linux**: AppImage, deb, rpm
