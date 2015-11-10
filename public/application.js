// will be the client-side code. ... could be called 'client.js'
var socket = io(); // the socket.io library creates a global variable called 'io'

socket.on('connect', function () {
  console.log('You have connected!');
});