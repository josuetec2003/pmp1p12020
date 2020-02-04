'use strict'
const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
	var win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		center: true,
		width: 700,
		height: 500,
		show: false
	})

	//win.loadURL('https://devdocs.io/')
	win.loadFile('views/index.html')

	win.once('ready-to-show', () => {
		win.show()
	})
})


