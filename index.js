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

io.on('connection', function (socket) {
  console.log('Someone has connected.');
  // the connection happens
  // emit a message. Socket.io includes the 'eventEmitter' library
  // the socket will now send a message over
  // to this indivudual browser (in scope as 'socket', which was passed in).

  // lets shoot some stuff over the wire on a regular interval:
  var count = 0;
  var interval = setInterval(function () {
    socket.emit('message', {user: 'turingbot', text: 'Hello, world! ' + count++});
  }, 500);

  // clean up after yourself! lest there be a terrible memory link.
  socket.on('disconnect', function () {
    clearInterval(interval);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
