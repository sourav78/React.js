import './style.css'

interface Todo {
  title: string,
  isCompleted: boolean,
  readonly id: string
}

const todos: Array<Todo> = []

const todoContainer = document.querySelector('.todo-container') as HTMLDivElement

const todoinput = document.getElementById('todo') as HTMLInputElement
const myForm = document.getElementById('myForm') as HTMLFormElement

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault()

  const todo: Todo = {
    title: todoinput.value,
    isCompleted: false,
    id: String(Math.floor(Math.random()*1000))
  }

  todos.push(todo)
  todoinput.value = ""
  console.log(todos);
  renderTodos(todos)

}

const deleteTodo = (id: string) => {
  let idx = todos.findIndex(item => item.id === id)
  todos.splice(idx, 1)
  renderTodos(todos)
}

const renderTodos = (todos: Todo[]) => {
  todoContainer.innerText = ""
  todos.forEach(item => {


    const todoCont = document.createElement('div') as HTMLDivElement
    todoCont.className = 'todo-cont'

    //checkbox
    const checkBox = document.createElement('input') as HTMLInputElement
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = item.isCompleted
    checkBox.onchange = () => {
      title.style.textDecoration = checkBox.checked ? 'line-through' : 'none'
      item.isCompleted = checkBox.checked ? true : false
    }

    //title
    const title = document.createElement('p') as HTMLParagraphElement
    title.innerText = item.title
    title.style.textDecoration = checkBox.checked ? 'line-through' : 'none'

    //Delete button
    const deleteBtn = document.createElement('button') as HTMLButtonElement
    deleteBtn.textContent = 'Delete'
    deleteBtn.onclick = () => {
      deleteTodo(item.id)
    }

    todoCont.append(checkBox, title, deleteBtn)

    todoContainer.append(todoCont)
  })
}