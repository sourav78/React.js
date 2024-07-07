import { Button, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const CustomRoom = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []);

  const [message, setMessage] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("CUSTOM_ROOM_JOINED", (roomId) => {
      console.log("Room joined : ", roomId);
    });

    socket.on("CUSTOM_SEND_MESSAGE", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleJoinRoom = () => {
    if (!roomId) {
      alert("Please enter room id");
      return;
    }
    socket.emit("CUSTOM_ROOM_JOIN", roomId)
  };

  const sendMessage = () => {
    if (!message) {
      alert("Please enter messgae");
      return;
    }
    socket.emit("CUSTOM_SEND_MESSAGE", {roomId, message})
  };

  return (
    <>
      <div className="h-screen w-full bg-slate-400 flex justify-center items-center">
        <div className="w-2/5 p-2 border-black">
          <div className=" flex gap-2">
            <TextField
              style={{ flexGrow: true, width: "100%" }}
              id="outlined-size-small"
              className="text-white"
              size="small"
              placeholder="Room id"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <Button onClick={handleJoinRoom} variant="contained">
              Join
            </Button>
          </div>
          <div className="mt-4 flex gap-2">
            <TextField
              style={{ flexGrow: true, width: "100%" }}
              id="outlined-size-small"
              className="text-white"
              size="small"
              placeholder="Username"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={sendMessage} variant="contained">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomRoom;
