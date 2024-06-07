import React, { useEffect, useMemo, useState } from "react";
import { TextField, Button} from '@mui/material'
import {io} from 'socket.io-client'

const PublicChat = () => {

  const [message, setMessage] = useState("")

  
  const socket = useMemo(() => io("http://localhost:3000"), [])

  const handleMessageSend = () => {
    if(message){
        socket.emit("message", message);
    }
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("join", (join) => {
      console.log(join);
    });

    socket.on("recieve-message", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="main-cont">
      <div className="w-[40%] px-1 py-2 border border-black rounded-lg m-auto">
        <div className="mb-2 border-black p-1 h-[600px] flex flex-col overflow-y-auto ">
          <div className="py-1 flex justify-start">
            <div className="inline-block max-w-[70%] px-3 py-2 bg-green-300 rounded-r-xl">Hyy iam Julu </div>
          </div>
          <div className="py-1 flex justify-end">
            <div className="inline-block max-w-[70%] px-3 py-2 bg-blue-300 rounded-l-xl ">Hyy iam Julu Lorem </div>
          </div>
        </div>
        <form>
          <TextField
            style={{ flexGrow: true, width: "100%" }}
            id="outlined-size-small"
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleMessageSend} variant="contained">
            Send
          </Button>
        </form>
        
      </div>
    </div>
  );
};

export default PublicChat;
