import React, {useEffect, useState} from 'react'
import './covid.css'

function Covid(){

    const [data, setData] = useState([])

    const getCovidData = async () => {
        let res = await fetch("https://data.covid19india.org/data.json")
        let data = await res.json()

        setData(data.statewise[0])

        console.log(data.statewise[0]);
    }

    useEffect(()=> {
        getCovidData()
    }, [])
    return(
        <>
            <h3>Live Tracking</h3>
            <h2>Covid19 Live Tracker</h2>

            <ul className='ul-item'>

                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>OUR</span> Country</p>
                        <p className='card-data'>INDIA</p>
                    </div>
                </li>

                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>TOTAL</span> RECOVERED</p>
                        <p className='card-data'>{data.recovered}</p>
                    </div>
                </li>

                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>TOTAL</span> CONFIRMED</p>
                        <p className='card-data'>{data.confirmed}</p>
                    </div>
                </li>
                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>TOTAL</span> DEATHS</p>
                        <p className='card-data'>{data.deaths}</p>
                    </div>
                </li>

                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>TOTAL</span> ACTIVE</p>
                        <p className='card-data'>{data.active}</p>
                    </div>
                </li>

                <li className='card-item'>
                    <div className='card'>
                        <p className='header'><span id='sp'>LAST</span> UPDATE</p>
                        <p className='card-data'>{data.lastupdatedtime}</p>
                    </div>
                </li>

            </ul>
        </>
    )
}

export default Covid