import React, { useEffect, useMemo, useState } from "react";
import { TextField, Button} from '@mui/material'
import {io} from 'socket.io-client'
import SingleMessage from "./SingleMessage";

const random_names = [
  'Ethan', 'Anthony', 'Brooklyn', 'Nathan', 'Oliver', 'Madison', 'Luke', 'Grace', 'Mason', 'James',
  'Madison', 'Andrew', 'Brooklyn', 'John', 'Samuel', 'Audrey', 'Luna', 'Brooklyn', 'Jacob', 'Aaron',
  'Camila', 'Sophia', 'Paisley', 'Carter', 'Isabella', 'Layla', 'Avery', 'Michael', 'Jackson', 'Isaac',
  'Ava', 'Dylan', 'Henry', 'Ellie', 'Jack', 'Penelope', 'Lillian', 'Anthony', 'Grace', 'Natalie',
  'Ethan', 'Avery', 'Benjamin', 'Isaiah', 'Alexander', 'Madison', 'Aubrey', 'David', 'Isabella', 'Matthew',
  'Evelyn', 'Lincoln', 'Lucas', 'Ellie', 'Noah', 'Isabella', 'Alexander', 'Logan', 'Lincoln', 'Wyatt',
  'Grace', 'Zoe', 'Paisley', 'Gabriel', 'Zoe', 'Jack', 'Logan', 'Aiden', 'Daniel', 'Jayden', 'Madison',
  'Stella', 'Alexander', 'Audrey', 'Sofia', 'John', 'Jack', 'Chloe', 'Nathan', 'Paisley', 'Stella',
  'Lillian', 'Avery', 'Addison', 'Riley', 'Madison', 'Riley', 'Skylar', 'Isaac', 'Christopher', 'Benjamin',
  'Scarlett', 'David', 'Riley', 'Julian', 'Michael', 'Ava', 'Nathan', 'Eleanor', 'Anthony'
]

const PublicChat = () => {

  const [username, setUsername] = useState(random_names[Math.floor(Math.random()*100)])
  const [message, setMessage] = useState("")
  const [chats, setChats] = useState([])

  
  const socket = useMemo(() => io("http://localhost:3000"), [])

  const handleMessageSend = () => {
    if(message){
      socket.emit("message", message);
      setChats(prev => [...prev, {username: "you", message}]) 
    }
    setMessage("");
  };

  useEffect(() => {
    console.log(username);
    socket.emit("user-connect", username)
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("join", (join) => {
      setChats(prev => [...prev, {username: "", message: join}])
    });

    socket.on("recieve-message", (data) => {
      console.log(data);
      setChats(prev => [...prev, data])
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="main-cont">
      <div className="lg:w-[40%] w-[80%] px-1 py-2 border border-black rounded-lg m-auto bg-gray-800">
        <div className="p-2 bg-green-500">
          <h3 className="text-lg text-white text-center">Name: {username}</h3>
        </div>
        <div className="mb-2 border-black p-1 h-[600px] flex flex-col overflow-y-auto ">
          {
            chats.map((chat, ind) => (<SingleMessage key={ind} data={chat} />))
          }
        </div>
        <form>
          <TextField
            style={{ flexGrow: true, width: "100%"}}
            id="outlined-size-small"
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'green', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: 'blue', // Border color when hovering
                },
              },
            }}
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
