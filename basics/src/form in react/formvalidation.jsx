import React from 'react'
import "./validate.css"
import { useState } from 'react'

function Formvalidation() {

    const [name, setName] = useState("")
    const [greetname, setGreetName] = useState("")
    return (
        <div className="cont">
            <h1 className='name'>Hello {greetname}</h1>
            <input 
                type="text" 
                name="" id="inp"
                placeholder='Enter your name' 
                onChange={(e) => setName(e.target.value)} />
            <div className="sub">
                <button onClick={() => setGreetName(name)}>Greet</button>
            </div>
        </div>
    )
}

export default Formvalidation