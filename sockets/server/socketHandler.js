// socketHandler.js
let users = {};
let themeMode = false;

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.emit('greet', "Welcome to the Room");

    socket.on("user-connect", (username) => {
      users[socket.id] = username;
      console.log(`${username} connected`);
      socket.emit("join-theme", themeMode);
      socket.broadcast.emit("join", `${users[socket.id]} has joined`);
    });

    socket.on("message", (message) => {
      socket.broadcast.emit("recieve-message", { username: users[socket.id], message });
    });

    socket.on('theme', (theme) => {
      themeMode = theme;
      io.emit('theme', theme);
      socket.broadcast.emit('theme-msg', `${users[socket.id]} changed the theme to ${theme ? 'dark' : 'light'}.`);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      delete users[socket.id];
    });
  });
};

export default socketHandler;
