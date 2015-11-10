// what node is running ... could be called 'server.js'
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// on connention, do this thing, and it will be given an instance of 'socket'
io.on('connection', function (socket) {
  console.log('Someone has connected.');
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
