import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function LineChats() {

    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
        },
        {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
        },
        {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
        },
        {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
        },
        {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
        }
    ]

    return (
        <>

            <LineChart className='mt-16' width={830} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line cx={1000} type="linear" dataKey="pv" stroke="#8884d8" />
                <Line type="linear" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

        </>
    )
}

export default LineChats