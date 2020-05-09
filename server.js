var express = require('express');
var app = express();
var server = require('http').Server(app);
 
app.use(express.static(__dirname + '/src'));  // change /public to /src
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(__dirname);
});
 
/*dom.window.gameLoaded = () => {
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8082;
  }
  server.listen(port, function () {
    console.log(`Listening on ${server.address().port}`);
  });
};*/

server.listen(8082, function () {
  console.log(`Listening on ${server.address().port}`);
});
