const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('chat message', (msg) => {
    // Broadcast the message to all connected clients.
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User left:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Chat app running at http://localhost:${PORT}`));
