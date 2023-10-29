import React from 'react'
import { useState } from 'react'
import addImage from "../assets/add.png"
import "./notes.css"
import { useStorage } from '../Context'
import { message } from "antd"

function NotesForm() {

    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    
    const [focus, setFocus] = useState(false)

    const {addNotes} = useStorage()

    const addFormNotes = () => {
        if(title.length > 0){
            addNotes(title, note)
            setTitle("")
            setNote("")
        }else{
            message.warning('Please enter note Title');
        }
    }

    const setEditFocus = () => {
        setFocus(true)
    }
    return (
        <>
            <div className={`notes-cont max-w-xl w-full mt-5 bg-white p-3 rounded-md relative z-10 ${focus ? `pb-10` : 'pb-3'}`}>

                <input type="text" placeholder={focus ? "Title" : "Take a note..."} className=' w-full bg-white  border-gray-500 border-none outline-none text-black text-lg rounded px-1 py-1 font-semibold'
                    disabled={false}
                    onClick={setEditFocus}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea name="" id="" tabIndex={0} placeholder=' Write your notes here' className={` min-w-md w-full min-h-[150px] bg-white text-black outline-none resize-none mt-4 no-scrollbar
                    ${focus ? `block` : 'hidden'}
                `}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>
                
                <div className={`add-noe-btn absolute -bottom-6 right-4 ${focus ? `block` : 'hidden'} cursor-pointer`}
                    onClick={addFormNotes}
                >
                    <img src={addImage} className={` w-14 `}/>
                </div>
            </div>
        </>
    )
}

export default NotesForm