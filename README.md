# 💬 Real-Time Chat Application

A simple and interactive real-time chat application that allows users to exchange messages instantly through a web browser.

## 🚀 Features

- Real-time messaging using Socket.IO
- Instant message delivery between connected users
- Simple and user-friendly interface
- Multiple users can connect to the chat
- Responsive chat interface
- Node.js server with Express

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** Socket.IO
- **Version Control:** Git and GitHub

## 📁 Project Structure

```text
Real_Time_Chat_Application/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Installation and Setup

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm on your computer.

### 1. Clone the repository

```bash
git clone https://github.com/padmarupa31/Real-time-chat-application.git
```

### 2. Navigate to the project folder

```bash
cd Real-time-chat-application
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

If the `npm start` command is not configured in `package.json`, run:

```bash
node server.js
```

### 5. Open the application

Visit the following address in your browser:

```text
http://localhost:3000
```

## 💡 How It Works

1. The Node.js server runs using Express.
2. Socket.IO establishes real-time communication between connected browsers and the server.
3. Users send messages through the chat interface.
4. The server broadcasts messages to connected users according to the application's event-handling logic.

## 🎯 Project Objective

The objective of this project is to understand real-time web communication, client-server interaction, event-driven programming, and the integration of Socket.IO with a Node.js application.

## 🔮 Future Enhancements

- User authentication
- Private messaging
- Chat rooms and group conversations
- Message timestamps
- Persistent message storage
- Online user indicators

## 👩‍💻 Author

**Padmaroopa D.**

GitHub: [@padmarupa31](https://github.com/padmarupa31)

## 📄 License

This project is created for educational and learning purposes.
