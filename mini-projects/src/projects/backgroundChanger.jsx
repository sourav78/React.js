import React, {useState} from 'react'

function BackgroundChanger() {

    const [color, setColor] = useState("blueviolet")

    return (
        <div className=' w-full h-screen' style={{backgroundColor : color}}>
            <div className='  fixed bottom-7 flex flex-wrap justify-center w-full'>
                <div className=' bg-white p-3 rounded-full m-auto flex flex-wrap gap-4 shadow-2xl'>
                    <button onClick={() => setColor("red")}
                    className=' text-white px-4 py-1 bg-red-600 rounded-full text-lg'>Red</button>
                    <button onClick={() => setColor("green")}
                    className=' text-white px-4 py-1 bg-green-600 rounded-full text-lg'>Green</button>
                    <button onClick={() => setColor("blue")}
                    className=' text-white px-4 py-1 bg-blue-600 rounded-full text-lg'>Blue</button>
                    <button onClick={() => setColor("orange")}
                    className=' text-white px-4 py-1 bg-orange-600 rounded-full text-lg'>Orange</button>
                    <button onClick={() => setColor("lavender")}
                    className=' text-white px-4 py-1 bg-purple-300 rounded-full text-lg'>Lavender</button>
                    <button onClick={() => setColor("yellow")}
                    className=' text-white px-4 py-1 bg-yellow-400 rounded-full text-lg'>Yellow</button>
                    <button onClick={() => setColor("pink")}
                    className=' text-white px-4 py-1 bg-pink-400 rounded-full text-lg'>Pink</button>
                    <button onClick={() => setColor("purple")}
                    className=' text-white px-4 py-1 bg-purple-700 rounded-full text-lg'>Purple</button>
                    <button onClick={() => setColor("white")}
                    className=' text-black px-4 py-1 bg-white rounded-full text-lg shadow-md '>White</button>
                    <button onClick={() => setColor("black")}
                    className=' text-white px-4 py-1 bg-black rounded-full text-lg'>Black</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundChanger