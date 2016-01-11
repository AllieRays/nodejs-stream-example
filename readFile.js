var fs = require('fs');

fs.readFile("./trex.txt", "UTF-8", function (err, trex) {
  console.log(`File Read ${trex.length}`);
});
console.log("Reading File.");
