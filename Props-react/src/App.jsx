import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import CardDetails from './components/CardDetails'

function App() {

    let userDeatils1 = [{
        name: "Jane",
        role: "UI/UX Designer",
        insta: "https://github.com/Vishwa07dev/IdeaAppWorkShop/blob/main/server.js",
        twitter: "https://twitter.com/iam_julu",
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/",
        tagline: "The way to get started is to quit talking and begin doing.",
        profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        name: "Mark Toffer",
        role: "System Engineer",
        insta: "https://github.com/Vishwa07dev/IdeaAppWorkShop/blob/main/server.js",
        twitter: "https://twitter.com/iam_julu",
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/",
        tagline: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        profile: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },{
        name: "Robert Row",
        role: "Server Engineer",
        insta: "https://github.com/Vishwa07dev/IdeaAppWorkShop/blob/main/server.js",
        twitter: "https://twitter.com/iam_julu",
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/",
        tagline: "The future belongs to those who believe in the beauty of their dreams.",
        profile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }]

    let userList = []

    userDeatils1.forEach((ele, ind) => {
        userList.push(<CardDetails details = {ele}/>)
    })

    return (
        <>
            <h1 className=" text-3xl font-bold p-3 bg-purple-600 rounded-lg mb-6">
              Hello Coders!
            </h1>

            <div className=' flex flex-wrap gap-8'>
                <Cards cardName = "Sourav" links = "Visit Linkedin"/>
                <Cards cardName = "Hitesh" links = "Visit Youtube"/>
            </div>

            <div className='jaha'>

            </div>

            {/* <CardDetails details = {userDeatils1}/> */}

            <div className=' flex flex-wrap gap-12 m-7'>{userList}</div>
          
        </>
    )
}

export default App
