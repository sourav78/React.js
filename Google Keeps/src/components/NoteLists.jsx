import React from 'react'
import bin from "../assets/bin.png"
import edit from "../assets/edit.png"
import color from "../assets/color.png"
import "./notes.css"
import { useStorage } from '../Context'
import { Modal, Popover, Tooltip } from 'antd'
import { useState } from 'react'

function NoteLists({note}) {

    const [cardColor, setCardColor] = useState(note.cardColor)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [editTitle, setEditTitle] = useState(note.title)
    const [editNotes, setEditNotes] = useState(note.note)

    const {deleteNote, editNote} = useStorage()

    const deleteNotes = () => {
        deleteNote(note.id)
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const updateNote = () => {
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor:cardColor})
        setIsModalOpen(false)
    }
    
    const cancelNote = () => {
        setIsModalOpen(false)
        setEditTitle(note.title)
        setEditNotes(note.note)
    }

    const setBgBlue = () => {
        setCardColor("bg-blue-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgPink = () => {
        setCardColor("bg-pink-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgCyan = () => {
        setCardColor("bg-cyan-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgGreen = () => {
        setCardColor("bg-green-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgPurple = () => {
        setCardColor("bg-purple-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgYellow = () => {
        setCardColor("bg-yellow-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    const setBgOrange = () => {
        setCardColor("bg-orange-300")
        editNote(note.id, {...note , title: editTitle, note: editNotes, cardColor: cardColor})
    }
    
    const content = (
        
        <div className="flex gap-3">
                <Tooltip placement='top' title={"Double click"}>
                    <div className="blue w-6 h-6 rounded-full bg-blue-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                            onClick={setBgBlue}
                        ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-pink-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgPink}
                    ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-cyan-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgCyan}
                    ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-green-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgGreen}
                    ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-purple-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgPurple}
                    ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-yellow-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgYellow}
                    ></div>
                </Tooltip>
                <Tooltip placement='top' title={"Double click"}>
                <div className="blue w-6 h-6 rounded-full bg-orange-400 cursor-pointer hover:outline outline-2 outline-blue-400 outline-offset-2"
                    onClick={setBgOrange}
                    ></div>
                </Tooltip>
        </div>
    )

    return (
        <>
            <div className={`single-note min-w-[180px] max-w-[270px] w-full overflow-hidden p-4 ${cardColor} border-gray-300 border rounded text-black`}>
                <input type="text"
                    className=' bg-transparent text-xl font-semibold p-[2px]'
                    value={note.title}
                    disabled
                />

                <p className=' mt-2 text-base'>
                    {note.note}
                </p>
                <div className="mt-2 h-4">
                    <div className="tools relative py-2 hidden">
                        <div className="absolute right-0 cursor-pointer"
                            onClick={deleteNotes}
                        >
                            <img className=' w-4' src={bin} alt="" />
                        </div>
                        <div className="absolute right-8 cursor-pointer"
                            onClick={showModal}
                        >
                            <img className=' w-4' src={edit} alt="" />
                        </div>
                        <div className="absolute right-16 cursor-pointer"
                            
                        >
                            <Popover content={content} placement='bottom' title="Colors" trigger={'click'}>
                                <img className=' w-4' src={color} alt="" />
                            </Popover>
                        </div>
                    </div>
                </div>
                <Modal open={isModalOpen} className='text-black' onOk={updateNote} onCancel={cancelNote}>
                    <div className="w-full p-2 mt-5">
                        <input type="text"
                            className='outline-none border-none bg-white w-full text-lg text-black font-semibold'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            />

                        <textarea className='outline-none border-none bg-white w-full text-lg text-black resize-none min-h-[140px] mt-2 no-scrollbar'
                            spellCheck={false}
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                        >
                            
                        </textarea>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default NoteLists