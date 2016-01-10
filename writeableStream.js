var fs = require('fs');
var stream = fs.createWriteStream('tinyarms.txt');

stream.write('Tyrannosaurus means "tyrant lizard". \n');
stream.write('T-Rex hates pushups.');
stream.end();
