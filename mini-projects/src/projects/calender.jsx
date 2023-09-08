import React, {useState} from 'react'
import './calender.css'

function Calender() {

    const [time, setTime] = useState([])
    const [date, setDate] = useState([])

    setInterval(()=>{
        let currentTime = new Date().toLocaleTimeString()
        let todayDate = new Date().toLocaleDateString()
        setTime(currentTime)
        setDate(todayDate)
    }, 100)

    return (
        <div>
            <div className='main'>
                <h1 className='header'>calender</h1>
                <div className='date-cont'>
                    <p className='date-name'>Today Date</p>
                    <div className='sub-cont'>
                        <p className='date-value'>{date}</p>
                    </div>
                </div>
                <div className='date-cont'>
                    <p className='date-name'>Time</p>
                    <div className='sub-cont'>
                        <p className='date-value'>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender