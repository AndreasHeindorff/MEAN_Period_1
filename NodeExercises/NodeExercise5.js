var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function (err, list) {
    for (var index in list) {
        if (list[index].split(".")[1] == extension) {
            console.log(list[index]);
        }
    }
});