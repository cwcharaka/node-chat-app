const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new User connected..');

  socket.on('disconnect', () => {
    console.log('User disconnected.');
  });

  socket.on('createMessage', (message) => {
    console.log('Create Message', message);
  });

  socket.emit('newMessage', {
    from: 'Anu',
    text: 'Hi from Anu',
    createdAt: 1234
  })
});



server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
