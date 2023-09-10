import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumber] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(numberAllow) str += "0123456789"
    if(specialChar) str += "!@#$%^&*()+{}[]:;`~?/_-+="

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllow, specialChar, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 6)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordRef = useRef(null)
  
  useEffect(()=> {
    generatePassword()
  }, [length, numberAllow, specialChar])

    return (
        <>
          <div className=" w-full max-w-xl mx-auto py-2 px-4 my-8 bg-gray-600 rounded-md shadow-md">
            <div className=" flex rounded-md overflow-hidden">
              <input type="text" 
                value={password}
                readOnly
                className=' w-full px-2 py-1 text-lg'
                ref={passwordRef}
              />
               <button onClick={copyToClipBoard}
                className='bg-blue-600 p-1 text-white'>Copy</button>
            </div>
            <div className='flex gap-x-2 text-xl text-white'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={30}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
                  />
                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={numberAllow}
                  id="numberInput"
                  onChange={() => setNumber( (prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={specialChar}
                      id="characterInput"
                      onChange={() => setSpecialChar( (prev) => !prev)}
                  />
                  <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
        </>
    )
}

export default App
