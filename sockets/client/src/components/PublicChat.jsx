import React, { useEffect, useState } from "react";
import { TextField, Button} from '@mui/material'

const PublicChat = ({socket}) => {

  const [message, setMessage] = useState("")

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
      <div className="cont">
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
        <div className="">
            
        </div>
      </div>
    </div>
  );
};

export default PublicChat;
