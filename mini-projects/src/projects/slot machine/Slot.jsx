import React, {useState} from 'react'


function Slot(props) {
    
    let [val1, setVal1] = useState("")
    let [val2, setVal2] = useState("")
    let [val3, setVal3] = useState("")
    let [luck, setLuck] = useState("Try Your Luck ⏳⏳⏳")
    
    let {slot1} = props
    let {slot2} = props
    let {slot3} = props
    setTimeout(() => {
        setVal1(slot1)
    }, 3000)

    setTimeout(() => {
        setVal2(slot2)
    }, 5000)

    setTimeout(() => {
        setVal3(slot3)

        if(slot1 === slot2 && slot1 === slot3){
            setLuck("You Won The Game 🎉🎉🎉")
        }else{
            setLuck("Better Luck Next Time 👍")
        }
    }, 7000)

        

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