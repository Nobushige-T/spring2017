const http = require('http'); //httpかhttps
const server = http.createServer(function(req, res){ //サーバー作成,引数はreqとres
  console.log(req.method + ': ' + req.url);
  res.end('Hello Node!');
});
const port = 8080; //普段は80
server.listen(port, function(){
  console.log('server running on port ' + port);
}); //サーバー起動
