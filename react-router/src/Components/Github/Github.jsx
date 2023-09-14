import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const res = useLoaderData()

    const [profile, setProfile] = useState("")
    const [name, setName] = useState("")
    const [followers, setFollowers] = useState("")

    // useEffect(() => {
    //   fetch("https://api.github.com/users/sourav78")
    //   .then(res => res.json())
    //   .then(res => {
    //         setProfile(res.avatar_url)
    //         setName(res.name)
    //         setFollowers(res.followers)
    //     })
      
    // }, [])
    
    return (
        <>
            <div className=" p-10">
            <div className="relative h-[400px] w-[300px] rounded-md m-auto">
                <img
                    src={res.avatar_url}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{res.name}</h1>
                    <p className="mt-2 text-lg text-gray-300">
                        User Name : {res.login}
                    </p>
                    <p className="mt-2 text-lg text-gray-300">
                        Followers : {res.followers}
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        <a href="https://github.com/sourav78" target="_blank">
                            View Profile
                        </a>
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export const githubUserInfo = async () => {
    const res = await fetch("https://api.github.com/users/sourav78")
    return res.json()
}

export default Github