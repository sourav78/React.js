import { useState } from "react"

type PropsType = {
  todo: todoType
  handleCompleteTodo: (id:number) => void
  deleteTodo: (id:number) => void
  editTodo: (id:number, title: todoType["title"]) => void
}

const TodoItems = ({todo, handleCompleteTodo, deleteTodo, editTodo}: PropsType) => {

  const [title, setTitle] = useState<todoType["title"]>(todo.title)

  const [toggleReadonly, setToggleReadonly] = useState<boolean>(true)

  const handleEdit = () => {
    if(toggleReadonly){
      setToggleReadonly(false)
    }else{
      editTodo(todo.id, title)
      setToggleReadonly(true)
    }
  }

  return (
    <>
        <div className="mt-2 w-full border-2 border-gray-400 flex p-2 rounded-md gap-1">
          <input 
            onChange={() => handleCompleteTodo(todo.id)}
            type="checkbox" />
          <input 
          className={`flex-1 outline-none ${todo.isComplete && 'line-through'}`}
          readOnly = {toggleReadonly}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" />
          <div className="">
            {
              !todo.isComplete && <button 
              onClick={handleEdit}
              className="mr-1 hover:bg-blue-200">{toggleReadonly? 'EDIT' : "SAVE"}</button>
            }
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="mr-1 hover:bg-blue-200">DEL</button>
          </div>
        </div>
    </>
  )
}

export default TodoItems