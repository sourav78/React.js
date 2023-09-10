import React, {useState} from 'react'


function Slot({slot1}) {
    
    let [val1, setVal1] = useState("")
    let [val2, setVal2] = useState("")
    let [val3, setVal3] = useState("")
    let [luck, setLuck] = useState("Try Your Luck ⏳⏳⏳")

    const allEqual = arr => arr.every( v => v === arr[0] )
    
    let valArr = slot1.split(" ")
    setTimeout(() => {
        setVal1(valArr[0])
    }, 1000)

    setTimeout(() => {
        setVal2(valArr[1])
    }, 1500)

    setTimeout(() => {
        setVal3(valArr[2])

        if(allEqual(valArr)){
            setLuck("You Won The Game 🎉🎉🎉")
        }else{
            setLuck("Better Luck Next Time 👍")
        }
    }, 2000)

        

    return (
        <>
            <div className=' bg-slate-300 p-3'>
                <div className=' flex flex-wrap gap-7 justify-center mb-8'>
                    <div className=' bg-white w-24 h-24 border-2 border-black rounded-xl flex justify-center items-center text-5xl'>{val1}</div>
                    <div className=' bg-white w-24 h-24 border-2 border-black rounded-xl flex justify-center items-center text-5xl'>{val2}</div>
                    <div className=' bg-white w-24 h-24 border-2 border-black rounded-xl flex justify-center items-center text-5xl'>{val3}</div>
                </div>
                <h2 className=' text-center text-4xl font-bold'>{luck}</h2>
            </div>
        </>
    )
}

export default Slot