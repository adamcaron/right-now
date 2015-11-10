// what node is running ... like 'server.js'

const express = require('express'); // get express, the sinatra of JavaScript.
const app = express(); // instantiate it
const http = require('http').Server(app); // pass it to my http library
const io = require('socket.io')(http); // library for websockets: jQuery for websockets -- it papers over chrome's, safari's, and firefox's implementations.

const path = require('path');

app.use(express.static('public')); // grab all the files in the /public directory and serve them... this express server is just serving static assets

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
