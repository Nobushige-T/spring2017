const fs = require('fs');
const rs = fs.createReadStream('stream.txt',{encoding: 'utf8'});
rs.on('data',function(data){ //イベントに関しての処理を行う。ここではdata
  console.log('data >>> ' + data.replace('\n', '\\n')); //置き換えのreplace
});
rs.on('end', function(){ //ここではend
  console.log(">>> END");
});
