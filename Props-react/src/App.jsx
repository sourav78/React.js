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
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/"
    },
    {
        name: "Mark Toffer",
        role: "System Engineer",
        insta: "https://github.com/Vishwa07dev/IdeaAppWorkShop/blob/main/server.js",
        twitter: "https://twitter.com/iam_julu",
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/"
    },{
        name: "Robert Row",
        role: "Server Engineer",
        insta: "https://github.com/Vishwa07dev/IdeaAppWorkShop/blob/main/server.js",
        twitter: "https://twitter.com/iam_julu",
        linkedin: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/"
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

            <div className=' flex flex-wrap gap-12'>{userList}</div>
          
        </>
    )
}

export default App
