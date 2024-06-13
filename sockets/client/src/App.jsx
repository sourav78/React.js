import React, { useState } from 'react'


import './App.css'
import { useNavigate } from 'react-router-dom'

const App = () => {

  const navigate = useNavigate();


  return (
    <>
      <div className="p-2 flex justify-center">
        <button 
          onClick={() => navigate("/public-chat")}
          className={`bg-green-400 p-2 rounded shadow-md border-2 outline-2 outline-blue-500`}>Public chat</button>
        <button 
          onClick={() => navigate("/random-room")}
          className={`bg-slate-400 p-2 rounded shadow-md border-2 outline-2 outline-blue-500`}>Random Rooms</button>
      </div>
    </>
  )
}

export default App