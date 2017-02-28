const fs = require('fs');
fs.writeFile(path.join(__dirname +'hello.txt'), 'Nodeはじめました。\n', function (err) {
  if (err) return console.log("Error!");
});
