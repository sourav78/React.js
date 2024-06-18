import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import DuoRoom from "./DuoRoom";

const RandomRoom = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [openRoom, setOpenRoom] = useState(false);

  const handleJoinRoom = () => {
    if (!username) {
      alert("Please enter user name");
      return;
    }else{
      setOpenRoom(true)
    }
  };

  return (
    <>
      <div className="p-2">
        
        {!openRoom ? (
          <><button
            onClick={() => navigate("/")}
            className="bg-gray-200 py-2 px-4 rounded text-lg"
          >
            Back
          </button><div className="pt-10">
              <div className=" h-[80vh] flex justify-center items-center">
                <div className="p-1 w-[35%] flex gap-2">
                  <TextField
                    style={{ flexGrow: true, width: "100%" }}
                    id="outlined-size-small"
                    className="text-white"
                    size="small"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "green", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "blue", // Border color when hovering
                        },
                      },
                      // "& .MuiInputBase-input": {
                      //   color: isdarkMode ? "white" : "black", // Text color
                      // },
                    }} />
                  <Button onClick={handleJoinRoom} variant="contained">
                    Join
                  </Button>
                </div>
              </div>
            </div></>
        ) : (
          <DuoRoom openRoom={setOpenRoom} username={username} />
        )}
      </div>
    </>
  );
};

export default RandomRoom;
