'use strict'
const {app, BrowserWindow} = require('electron')
const path = require('path')


if (process.env.NODE_ENV === 'development')
{
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
	})
}

app.on('ready', () => {
	var win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		center: true,
		width: 1200,
		height: 800,
		show: false
	})

	//win.loadURL('https://devdocs.io/')
	win.loadFile('views/index.html')

	win.once('ready-to-show', () => {
		win.show()
	})
})


