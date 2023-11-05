import Todo from "./components/Todo"
import AddTodo from "./components/addTodo"
import './App.css'


function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <div className=" flex items-center flex-col">
        <AddTodo/>
        <Todo/>
      </div>
    </>
  )
}

export default App
