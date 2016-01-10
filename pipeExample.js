
var fs = require('fs');
var zlib = require('zlib');

var readstream = fs.createReadStream('trex.txt');
var compress = zlib.createGzip();
var writestream = fs.createWriteStream('trex.txt.gz');
readstream.pipe(compress).pipe(writestream);
