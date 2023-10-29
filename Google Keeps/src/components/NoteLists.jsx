import React from 'react'
import bin from "../assets/bin.png"
import edit from "../assets/edit.png"
import "./notes.css"
import { useStorage } from '../Context'
import { Modal } from 'antd'
import { useState } from 'react'

function NoteLists({note}) {

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
        editNote(note.id, {...note , title: editTitle, note: editNotes})
        setIsModalOpen(false)
    }
    
    const cancelNote = () => {
        setIsModalOpen(false)
        setEditTitle(note.title)
        setEditNotes(note.note)
    }

    return (
        <>
            <div className="single-note min-w-[180px] max-w-[250px] w-full overflow-hidden p-4 bg-white border-gray-300 border rounded text-black">
                <input type="text"
                    className=' bg-white text-xl font-semibold p-[2px]'
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
                    </div>
                </div>
                <Modal open={isModalOpen} className='text-black' onOk={updateNote} onCancel={cancelNote}>
                    <div className="w-full p-2 mt-5">
                        <input type="text"
                            className='outline-none border-none bg-white w-full text-lg text-black font-semibold'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            />

                        <textarea className='outline-none border-none bg-white w-full text-lg text-black resize-none min-h-[100px] mt-2 no-scrollbar'
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