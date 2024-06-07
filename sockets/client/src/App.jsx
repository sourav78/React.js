import React, { useEffect, useMemo, useState } from 'react'
import {io} from 'socket.io-client'

import './App.css'
import PublicChat from './components/PublicChat'

const App = () => {

  

  const socket = useMemo(() => io("http://localhost:3000"), [])

  

  return (
    <>
      <PublicChat socket={socket}/>
    </>
  )
}

export default App