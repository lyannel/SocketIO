// Setup basic express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static('public'));


let numUsers = 0;
io.on('connection', function (socket) {

  // when the client emits 'typing', we broadcast it to others
  socket.on('move tears', function (data) {
    console.log('Emitting tears');
    socket.broadcast.emit('move tears', data);
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('move screaming', function (data) {
    console.log('Emitting screams');
    socket.broadcast.emit('move screaming', data);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    console.log('disconnected!!');
  });
});
