import React from 'react'
import './greeting.css'

function Greeting() {

    let hours = new Date().getHours()
    let greet = ""
    let col ={}
    // document.querySelector(".time").style.color = "#fff"
    if(hours >= 1 && hours <= 12){
        greet = "Good Morning"
        col.color = "#60c92c"
    }else if(hours > 12 && hours <= 17){
        greet = "Good Afternoon"
        col.color = "#f35309"
    }else if(hours > 17 && hours <= 20){
        greet = "Good Evening"
        col.color = "#f49c0e"
    }else if(hours > 20){
        greet = "Good Night"
        col.color = "#4a006f"
    }

    

    return (
        <>
            <div className='main-cont'>
                <div className='greet-cont'>
                    <p className='text-head'>Hello Coders, <span style={col} >{greet}</span></p>
                </div>
            </div>
        </>
    )
}

export default Greeting