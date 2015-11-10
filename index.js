const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

io.on('connection', function (socket) {
  // When a user connects.
  console.log('Someone has connected.');
  // Broadcast a message to all of the other clients connected
  // announcing that someone new has connected.
  socket.broadcast.emit('message', {user: 'turingbot', text: 'You can do the thing.'});
  io.sockets.emit('message', {user:'has conneted!', text: 'new connection'});

  // When a message comes in from a user.
  socket.on('message', function (channel, message) {
    console.log(channel + ': ', message);
    // Broadcast it out to all users.
  });

  // When a user disconnects.
  socket.on('disconnect', function () {
    // Broadcast a message to all of the other clients connected
    // announcing that someone new has disconnected.
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
