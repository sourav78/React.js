import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import RandomRoom from './pages/RandomRoom.jsx'
import PublicChat from './pages/PublicChat.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/public-chat",
    element: <PublicChat/>
  },
  {
    path: "/random-room",
    element: <RandomRoom/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
