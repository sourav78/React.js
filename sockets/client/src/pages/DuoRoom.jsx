import React, { useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import { TextField, Button } from "@mui/material";

const DuoRoom = ({ openRoom, username }) => {
  const socket = useMemo(() => io("http://localhost:3000"), []);

  const messageContainer = useRef(null)

  const [message, setMessage] = useState("");

  const [chats, setChats] = useState([]);

  const [room, setRoom] = useState(null);

  const onRoomLeave = () => {
    socket.emit("room-leave", { roomId: room.roomId, socketId: socket.id });
  };

  useEffect(() => {
    socket.emit("room-connect", username);

    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("get-room", (room) => {
      console.log(room);
      setRoom(room);
      console.log(room.player[Object.keys(room.player)[0]]);
    });

    socket.on("SENT_MESSAGE", (chat) => {
      setChats((prev) => [...prev, chat]);
    });

    socket.on("leave-room", ({ room, socketId }) => {
      setRoom(room);
      if (socketId === socket.id) {
        openRoom(false);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }
  }, [chats]);

  const handleMessageSend = () => {
    if (message) {
      socket.emit("SEND_MESSAGE", {
        message: message,
        socketId: socket.id,
        roomId: room.roomId,
      });
      setMessage("");
    }
  };

  return (
    <>
      <div className="p-2">
        <button
          onClick={onRoomLeave}
          className="bg-red-300 py-2 px-4 rounded text-lg"
        >
          Leave
        </button>
        <div className="pt-10">
          <div className="sm:h-[80vh] h-[85vh] bg-gray-50 border border-black rounded lg:w-3/4 sm:w-11/12 m-auto flex flex-col sm:flex-row">
            <div className="sm:w-[35%] w-full sm:h-full h-40 flex sm:flex-col flex-row sm:border-r-2 border-r-0 sm:border-b-0 border-b border-black">
              {room ? (
                <div className="sm:h-[50%] h-full w-1/2 bg-gray-800 sm:w-full sm:border-b border-b-0 sm:border-r-0 border-r border-white grid place-content-center">
                  <div className="text-5xl m-auto font-bold bg-gray-500 w-16 h-16 text-white grid place-content-center rounded-full">
                    <span>
                      {room.player[Object.keys(room.player)[0]].split("")[0]}
                    </span>
                  </div>
                  <p className="text-lg text-white text-center mt-2">
                    {room.player[Object.keys(room.player)[0]]} {Object.keys(room.player)[0] === socket.id && '(You)'}
                  </p>
                </div>
              ) : (
                <div className="sm:h-[50%] h-full w-1/2 sm:w-full grid place-content-center">
                  <span className="text-3xl font-semibold text-gray-500">
                    Loading...
                  </span>
                </div>
              )}
              {room && Object.keys(room.player).length > 1 ? (
                <div className="sm:h-[50%] h-full w-1/2 bg-gray-800 sm:w-full sm:border-b border-b-0 sm:border-r-0 border-r border-white grid place-content-center">
                  <div className="text-5xl m-auto font-bold bg-gray-500 w-16 h-16 text-white grid place-content-center rounded-full">
                    <span>
                      {room.player[Object.keys(room.player)[1]].split("")[0]}
                    </span>
                  </div>
                  <p className="text-lg text-white text-center mt-2">
                    {room.player[Object.keys(room.player)[1]]} {Object.keys(room.player)[1] === socket.id && '(You)'}
                  </p>
                </div>
              ) : (
                <div className="sm:h-[50%] bg-gray-800 h-full w-1/2 sm:w-full grid place-content-center">
                  <span className="text-3xl font-semibold text-gray-500">
                    Loading...
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 h-full flex flex-col">
              <div className="p-1 h-12 border-b border-black bg-green-500"></div>
              <div className="flex-1 bg-gray-200">
                <div className="border-2 border-black h-full flex flex-col">
                  <div ref={messageContainer} className="flex-1 sm:max-h-[70vh] max-h-[55vh] border border-black flex flex-col overflow-y-scroll">
                    {chats.map((chat, ind) => (
                      <div
                        key={ind}
                        className={`py-1 flex ${
                          chat.socketId === socket.id
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`inline-block max-w-[70%] px-3 py-1 ${
                            chat.socketId === socket.id
                              ? "bg-blue-300 rounded-l-xl"
                              : "bg-green-300 rounded-r-xl"
                          }`}
                        >
                          <p className="break-words">{chat.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex px-1 py-1 gap-4">
                    <TextField
                      id="outlined-size-small"
                      className="flex-1 text-white"
                      size="small"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button onClick={handleMessageSend} variant="contained">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuoRoom;
