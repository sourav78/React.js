import shortid from "shortid";

// socketHandler.js
let users = {};
let themeMode = false;

let rooms = [];

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.emit('greet', "Welcome to the Room");

    socket.on("user-connect", (username) => {
      users[socket.id] = username;
      console.log(`${username} connected`);
      socket.emit("join-theme", themeMode);
      socket.broadcast.emit("join", `${users[socket.id]} has joined`);
      io.emit("online", Object.keys(users).length)
    });

    socket.on("message", (message) => {
      socket.broadcast.emit("recieve-message", { username: users[socket.id], message });
    });

    socket.on('theme', (theme) => {
      themeMode = theme;
      io.emit('theme', theme);
      socket.broadcast.emit('theme-msg', `${users[socket.id]} changed the theme to ${theme ? 'dark' : 'light'}.`);
    });



    //Random Rooms

    socket.on("room-connect", (username) => {
      const index = rooms.findIndex((room) => room.vacant === true)
      if(index >= 0){

        const room = rooms[index];
        room.player[socket.id] = username
        room.vacant = false
        socket.join(room.roomId)
        io.to(room.roomId).emit("get-room", room)


      }else{
        const room = {
          roomId: shortid.generate(),
          player: {
            [socket.id]: username
          },
          vacant: true
        }

        rooms.push(room)
        socket.join(room.roomId)
        io.to(room.roomId).emit("get-room", room)
      }
      console.log(rooms);
    })


    socket.on("room-leave", (roomId) => {
      const index = rooms.findIndex((room) => room.roomId === roomId)
      
      delete rooms[index].player[socket.id]
      rooms[index].vacant = true

      io.to(roomId).emit("get-room", rooms[index])

      console.log(rooms);
    })


    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      delete users[socket.id];
      io.emit("online", Object.keys(users).length)
    });
  });
};

export default socketHandler;
