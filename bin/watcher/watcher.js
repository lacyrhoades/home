// Require
const fs = require('fs')
const chokidar = require('chokidar');
const syncy = require('syncy');
const path = require('path')

// Config
const sourceDir = "/Users/lacyrhoades/Offline/CAM"
const publicFolder = "/Volumes/DUMPSTER/"

// State
var isSyncing = false

chokidar.watch(sourceDir).on('all', (event, pathstring) => {
  console.log('Watched dir contents changed...')
  tryToSync(path.dirname(pathstring), publicFolder)
});

function tryToSync(fromPath, toPath) {
  if (isSyncing) {
    return
  }

  isSyncing = true

  doSync(fromPath, toPath)
}

function doSync(fromPath, toPath) {
  if (fs.existsSync(toPath)) {
    console.log("Now syncing")

    // can use "!/path/to/ignore"
    syncy([fromPath+'/**'], toPath)
    .then(() => {
      console.log('Synced files!')
      isSyncing = false
    })
    .catch((err) => {
      console.log(err)
      console.log("Tried to sync but exploded")
    });
  } else {
    console.log("Waiting for network share to appear")
    setTimeout(function () {
      doSync(fromPath, toPath)
    }, 15000)
  }
}

console.log("Watching " + sourceDir + " for changes...")