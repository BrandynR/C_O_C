var express = require('express');
var app = express();
var server = require('http').Server(app);
 
app.use(express.static(__dirname + '/src'));  // change /public to /src
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(__dirname);
});
 
server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});
