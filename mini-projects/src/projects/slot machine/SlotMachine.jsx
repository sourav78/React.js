import React from 'react'
import Slot from './Slot'

function SlotMachine() {

    
    let vl1 = ""
    let vl2 = ""
    let vl3 = ""

    const tryLuck = () => {
        console.log(Math.floor(Math.random()*3)+1);
        let rnd1 = Math.floor(Math.random()*3)+1
        let rnd2 = Math.floor(Math.random()*3)+1
        let rnd3 = Math.floor(Math.random()*3)+1

        switch(rnd1){
            case 1:
                vl1 = "❤️"
                break
            case 2: 
                vl1 = "😊"
                break
            case 3: 
                vl1 = "✊"
                break
                default:
                    return
        }

        switch(rnd2){
            case 1:
                vl2 = "❤️"
                break
            case 2: 
                vl2 = "😊"
                break
            case 3: 
                vl2 = "✊"
                break
                default:
                    return
        }

        switch(rnd3){
            case 1:
                vl3 = "❤️"
                break
            case 2: 
                vl3 = "😊"
                break
            case 3: 
                vl3 = "✊"
                break
                default:
                    return
        }

        return (<Slot slot1 = {vl1} slot2 = {vl2} slot3 = {vl3}/>)
    }

    tryLuck()

    return (
        <>
            <div className=' w-2/5 m-auto border-2 border-black rounded-xl mt-24 overflow-hidden'>
                <div className=' flex justify-center'>
                <button className=' w-44 m-5 px-3 py-1 border-2 border-black bg-purple-600 font-bold text-white text-xl' onClick={tryLuck}>Try Your Luck</button>
                </div>
                {/* <Slot slot1 = {vl1} slot2 = {vl2} slot3 = {vl3} check = {check}/> */}
                {tryLuck()}
            </div>
        </>
    )
}

export default SlotMachine