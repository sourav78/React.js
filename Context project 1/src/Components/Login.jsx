import React from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const onHandleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="w-full md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="password"
        placeholder="Email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

        <button
            type="button"
            className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
            onClick={onHandleSubmit}
            >
            Button Text
        </button>
    </div>
  )
}

export default Login