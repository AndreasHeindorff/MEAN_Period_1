var directoryLister = (function (path, extension, callback) {
    var dirLister = {};
    var fs = require('fs');

    dirLister.readDir = fs.readdir(path, callback(extension));

    return dirLister;

}());