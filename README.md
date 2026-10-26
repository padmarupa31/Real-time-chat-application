# Experiment 5: Real-Time Chat Application

Full Stack Development practical using HTML, CSS, JavaScript, Node.js, Express.js, and Socket.IO.

## Aim
To build a real-time chat application with bidirectional communication.

## Install and run
1. Install Node.js (LTS).
2. Open this folder in VS Code / terminal.
3. Run:
   ```bash
   npm install
   npm start
   ```
4. Open http://localhost:3000 in your browser.
5. Open the same URL in two browser tabs and send messages to verify that messages appear in both tabs.

## Files
- `server.js` — Express HTTP server and Socket.IO event broadcasting.
- `public/index.html` — chat interface.
- `public/style.css` — responsive styling.
- `public/script.js` — sends and displays messages.

## Result
A real-time chat application was developed where multiple connected browser windows can exchange messages without refreshing the page.

## Note
This is a learning/demo practical. Messages are broadcast to connected clients and are not stored in a database.
