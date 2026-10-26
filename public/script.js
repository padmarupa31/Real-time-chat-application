const socket = io();
const form = document.getElementById('chatForm');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const username = document.getElementById('username');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const name = username.value.trim() || 'Guest';
  socket.emit('chat message', { name, text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
  input.value = '';
  input.focus();
});

socket.on('chat message', (message) => {
  const item = document.createElement('article');
  item.className = 'message';
  const meta = document.createElement('div');
  meta.className = 'meta';
  const sender = document.createElement('strong');
  sender.textContent = message.name || 'Guest';
  const time = document.createElement('span');
  time.textContent = message.time || '';
  const text = document.createElement('div');
  text.className = 'text';
  text.textContent = message.text || '';
  meta.append(sender, time);
  item.append(meta, text);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
