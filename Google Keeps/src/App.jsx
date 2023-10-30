import { useEffect, useState } from 'react'
import { StorageProvider } from './Context'
import keepImage from "./assets/google-keep.png"
import NotesForm from './components/NotesForm'
import NoteLists from './components/NoteLists'

function App() {

  const [notes, setNotes] = useState([])

  const addNotes = (title, note) => {
    setNotes((prev) => [{ id: Date.now(), title: title, note: note, cardColor: "bg-white"}, ...prev])
  }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((eachNote) => eachNote.id !== id))
  }

  const editNote = (id, note) => {
    setNotes((prev) => prev.map((eachNote) =>(eachNote.id === id ? note : eachNote)))
  }

  //For get item
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    
    if(notes && notes.length > 0){
      setNotes(notes)
    }
    console.log(notes);
  }, [])

  // for set item
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  return (

    <StorageProvider value={{notes, addNotes, deleteNote, editNote}}>
        <div className='h-screen overflow-hidden w-full bg-white flex flex-col'
        >
            <div className="nav-bar flex items-center bg-yellow-400 px-7 py-2" >
              <img className='w-14' src={keepImage} alt="" />
              <span className='text-white ml-3 text-3xl font-bold'>WeKeep</span>
            </div>
            <div className="notes-container flex-1 overflow-y-scroll no-scrollbar p-3">
               <div className=" flex justify-center">
                <NotesForm/>
               </div>
               <div className=" mt-20 px-6 flex justify-center sm:justify-start gap-4 flex-wrap">
                {
                  notes.map((note) => {
                    return <div key={note.id}>
                        <NoteLists note={note}/>
                    </div>
                  })
                }
               </div>
            </div>

        </div>
    </StorageProvider>

  )
}

export default App