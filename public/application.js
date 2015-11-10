var socket = io();

socket.on('connect', function () {
  console.log('You have connected!');
});

socket.on('message', function (message) {
  console.log('Something came along on the "message" channel:', message);
  $('.messages').append(message)
});

var $messages = $('.messages');

socket.on('message', function (message) {
  $messages.append(`<p>${message.user}: ${message.text}</p>`);
});