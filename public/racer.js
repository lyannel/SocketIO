/* global io */

  // Initialize variables
document.addEventListener('DOMContentLoaded', function () {


  const socket = io();
  let left1 = 0
  // Click events
  document.querySelector('.player1Btn').addEventListener('click', function (evt) {
    left1++;
    console.log('What??');
    socket.emit('move tears', {left: left1});
  });

  let left2 = 0
  // Click events
  document.querySelector('.player2Btn').addEventListener('click', function (evt) {
    left2++;
    console.log('Hello??');
    socket.emit('move screaming', {left: left2});
  });

  // Socket events

  // Whenever the server emits 'typing', show the typing message
  socket.on('move tears', function (data) {
    alert(data.left);
    const player1 = document.querySelector('.player1');
    console.log(player1);
    player1.style.left = data.left+'px';

  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('move screaming', function (data) {
    alert(data.left);
    const player2 = document.querySelector('.player2');
    console.log(player2);
    player2.style.left = data.left+'px';
  });
});
