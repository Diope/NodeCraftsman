'use strict';

watcher = new filesizeWatcher('/path/to/file');

watcher.on('error', function (err) {
	console.log("Error watching file: " + err);
});

watcher.on('grew', function (gain) {
	console.log("File grew by: " + gain);
});

watcher.on("shrank", function (loss) {
	console.log("File shrunk by: " + loss + " bytes");
});

watcher.stop();