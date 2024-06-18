import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const DuoRoom = ({openRoom, username}) => {

  const socket = useMemo(() => io("http://localhost:3000"), []);

  const [room, setRoom] = useState(null)

  const onRoomLeave = () => {
    // socket.emit("room-leave", room.roomId)
    // setTimeout(() => {
    //   openRoom(false)
    // }, 100);
    openRoom(false)
  }

  useEffect(() => {

    socket.emit("room-connect", username)

    socket.on("greet", (greet) => {
      console.log(greet);
    });

    socket.on("get-room", (room) => {
      console.log(room);
      setRoom(room)
      console.log(room.player[Object.keys(room.player)[0]]);
    })

    return () => {
      socket.emit("room-leave", room.roomId)
    }

  }, [])

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
              {
                room ? (
                  <div className="sm:h-[50%] h-full w-1/2 sm:w-full sm:border-b border-b-0 sm:border-r-0 border-r border-black grid place-content-center">
                    <div className="text-5xl m-auto font-bold bg-gray-500 w-16 h-16 text-white grid place-content-center rounded-full">
                      <span>{(room.player[Object.keys(room.player)[0]]).split("")[0]}</span>
                    </div>
                    <p className="text-lg text-center mt-2">{room.player[Object.keys(room.player)[0]]}</p>
                  </div>
                ) : (
                  <div className="sm:h-[50%] h-full w-1/2 sm:w-full grid place-content-center">
                    <span className="text-3xl font-semibold text-gray-500">Loading...</span>
                  </div>
                )
              }
              {
                room && Object.keys(room.player).length > 1 ? (
                  <div className="sm:h-[50%] h-full w-1/2 sm:w-full sm:border-b border-b-0 sm:border-r-0 border-r border-black grid place-content-center">
                    <div className="text-5xl m-auto font-bold bg-gray-500 w-16 h-16 text-white grid place-content-center rounded-full">
                      <span>{(room.player[Object.keys(room.player)[1]]).split("")[0]}</span>
                    </div>
                    <p className="text-lg text-center mt-2">{room.player[Object.keys(room.player)[1]]}</p>
                  </div>
                ) : (
                  <div className="sm:h-[50%] h-full w-1/2 sm:w-full grid place-content-center">
                    <span className="text-3xl font-semibold text-gray-500">Loading...</span>
                  </div>
                ) 
              }
            </div>
            <div className="flex-1 h-full flex flex-col">
              <div className="p-1 h-12 border-b border-black bg-green-500">

              </div>
              <div className="flex-1 bg-gray-200">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuoRoom;
