import React, {useEffect, useState} from 'react'
import Slot from './Slot'

function SlotMachine() {

    const [check, setCheck] = useState(true)
    
    
    const tryLuck = () => {

        let rnd1 = Math.floor(Math.random()*3)
        let rnd2 = Math.floor(Math.random()*3)
        let rnd3 = Math.floor(Math.random()*3)

        let slotItem = ["❤️", "😊", "✊"]

        return `${slotItem[rnd1]} ${slotItem[rnd2]} ${slotItem[rnd3]}`
    }

    useEffect(()=>{
        tryLuck()

    }, [check])


    return (
        <>
            <div className=' w-2/5 m-auto border-2 border-black rounded-xl mt-24 overflow-hidden'>
                <div className=' flex justify-center'>
                <button 
                    className=' shadow-md rounded shadow-slate-600 active:shadow-none w-44 m-5 px-3 py-1 border-2 border-black bg-purple-600 font-bold text-white text-xl'
                    onClick={() => setCheck((prev) => !prev)}
                >Try Your Luck</button>
                </div>
               <Slot slot1 = {tryLuck()}/>
            </div>
        </>
    )
}

export default SlotMachine