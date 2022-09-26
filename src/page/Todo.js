import { useState } from "react"

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    return (
        <div>
            <h1>Todo List ( {todos.length} )</h1>
            <form onSubmit={(e)=> {
                e.preventDefault()
                if(todo == '')
                {
                alert('할일을 입력해주세요')
                return
                }
                setTodos((currentArray) => [todo, ...currentArray])
                setTodo('')
            }}>
            <input
                type='text'
                placeholder="write you are todo list"
                onChange={(e)=> setTodo(e.target.value)}
                value={todo}
            >

            </input>
            <button>Add to Toto</button>
            </form>
            <ul>
            {todos.map((item, index) => 
            <li key={index}>{item}</li>)
            }
            </ul>
        </div>
    )
}
export default Todo