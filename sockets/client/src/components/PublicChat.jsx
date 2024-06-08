import React, { useEffect, useMemo, useState } from "react";
import { TextField, Button } from "@mui/material";
import { io } from "socket.io-client";
import SingleMessage from "./SingleMessage";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const random_names = [
  "Ethan",
  "Anthony",
  "Brooklyn",
  "Nathan",
  "Oliver",
  "Madison",
  "Luke",
  "Grace",
  "Mason",
  "James",
  "Madison",
  "Andrew",
  "Brooklyn",
  "John",
  "Samuel",
  "Audrey",
  "Luna",
  "Brooklyn",
  "Jacob",
  "Aaron",
  "Camila",
  "Sophia",
  "Paisley",
  "Carter",
  "Isabella",
  "Layla",
  "Avery",
  "Michael",
  "Jackson",
  "Isaac",
  "Ava",
  "Dylan",
  "Henry",
  "Ellie",
  "Jack",
  "Penelope",
  "Lillian",
  "Anthony",
  "Grace",
  "Natalie",
  "Ethan",
  "Avery",
  "Benjamin",
  "Isaiah",
  "Alexander",
  "Madison",
  "Aubrey",
  "David",
  "Isabella",
  "Matthew",
  "Evelyn",
  "Lincoln",
  "Lucas",
  "Ellie",
  "Noah",
  "Isabella",
  "Alexander",
  "Logan",
  "Lincoln",
  "Wyatt",
  "Grace",
  "Zoe",
  "Paisley",
  "Gabriel",
  "Zoe",
  "Jack",
  "Logan",
  "Aiden",
  "Daniel",
  "Jayden",
  "Madison",
  "Stella",
  "Alexander",
  "Audrey",
  "Sofia",
  "John",
  "Jack",
  "Chloe",
  "Nathan",
  "Paisley",
  "Stella",
  "Lillian",
  "Avery",
  "Addison",
  "Riley",
  "Madison",
  "Riley",
  "Skylar",
  "Isaac",
  "Christopher",
  "Benjamin",
  "Scarlett",
  "David",
  "Riley",
  "Julian",
  "Michael",
  "Ava",
  "Nathan",
  "Eleanor",
  "Anthony",
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const PublicChat = () => {
  const [username, setUsername] = useState(
    random_names[Math.floor(Math.random() * 100)]
  );
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const [isdarkMode, setIsdarkMode] = useState(false);

  const socket = useMemo(() => io("http://localhost:3000"), []);

  const handleMessageSend = () => {
    if (message) {
      socket.emit("message", message);
      setChats((prev) => [...prev, { username: "you", message }]);
    }
    setMessage("");
  };

  const themeChange = (e) => {
    console.log(e.target.checked);
    socket.emit("theme", e.target.checked);
  };

  useEffect(() => {
    socket.emit("user-connect", username);

    socket.on("join-theme", (theme) => {
      console.log(theme);
      setIsdarkMode(theme);
    });

    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("join", (join) => {
      setChats((prev) => [...prev, { username: "", message: join }]);
    });

    socket.on("recieve-message", (data) => {
      console.log(data);
      setChats((prev) => [...prev, data]);
    });

    socket.on("theme", (theme) => {
      setIsdarkMode(theme);
    });

    socket.on("theme-msg", (msg) => {
      setChats((prev) => [...prev, { username: "", message: msg }]);
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="main-cont">
      <div
        className={`lg:w-[40%] w-[80%] px-1 py-2 border border-black rounded-lg m-auto ${
          isdarkMode && "bg-gray-800"
        }`}
      >
        <div className="p-0 px-2 bg-green-500 flex items-center justify-between">
          <h3 className="text-lg text-white text-center">Name: {username}</h3>
          <div className="">
            <FormControlLabel
              control={
                <MaterialUISwitch
                  checked={isdarkMode}
                  onChange={themeChange}
                  sx={{ m: 1 }}
                />
              }
            />
          </div>
        </div>
        <div className="mb-2 border-black p-1 h-[600px] flex flex-col overflow-y-auto ">
          {chats.map((chat, ind) => (
            <SingleMessage key={ind} data={chat} />
          ))}
        </div>
        <form>
          <TextField
            style={{ flexGrow: true, width: "100%" }}
            id="outlined-size-small"
            className="text-white"
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "green", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "blue", // Border color when hovering
                },
              },
              "& .MuiInputBase-input": {
                color: isdarkMode ? "white" : "black", // Text color
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
