import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className=' text-center p-3 bg-slate-500 text-3xl text-white mx-5 my-4'>user: {userid}</div>
    )
}

export default User