import { useState } from "react"
import TodoItems from "./TodoItems"

const App = () => {

  const [todos, setTodos] = useState<todoType[]>([])
  const [title, settitle] = useState<todoType["title"]>('')

  const addTodo = () : void => {
    const newTodo:todoType = {
      title,
      isComplete: false,
      id: Math.floor(Math.random()*100000)
    }

    if(title){
      setTodos(prev => ([newTodo, ...prev]))
      settitle('')  
    }
    
  }

  const handleCompleteTodo = (id: todoType["id"]) => {
    const completed:todoType[] = todos.map(todo => {
      if(todo.id === id) todo.isComplete = !todo.isComplete

      return todo
    })

    setTodos(completed)
  }

  const deleteTodo = (id: todoType["id"]) => {
    const newTodo:todoType[] = todos.filter(todo => todo.id !== id)

    setTodos(newTodo)
  }

  const editTodo = (id: todoType["id"], title: todoType["title"]) =>{
    const editedTodo:todoType[] = todos.map((todo) => {
      if(todo.id === id) todo.title = title

      return todo
    })

    setTodos(editedTodo)
  }


  return (
    <div className="">
      <div className="w-[40%] m-auto pt-8">
        <div className="flex gap-2">
            <input 
              value={title}
              onChange={(e) => settitle(e.target.value)}
              className="outline-none flex-1 px-2 py-1 border-2 border-gray-400 rounded"
              type="text" />
            <button 
              onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded">ADD</button>
        </div>
        <div className="mt-4">
          {
            todos.map((todo: todoType) => (
              <TodoItems key={todo.id} todo={todo} editTodo={editTodo} handleCompleteTodo={handleCompleteTodo} deleteTodo={deleteTodo}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
