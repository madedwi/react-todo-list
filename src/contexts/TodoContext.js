import {useState, createContext} from 'react'

export const TodoContext = createContext()

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          label: 'Print Bills',
          completed: false,
          checked: true
        },
        {
          id: 2,
          label: 'Call Rampbo',
          completed: false,
          checked: false
        },
        {
          id: 3,
          label: 'Print Statements all',
          completed: true,
          checked: false
        }
      ])


      const addTodo = (todo) => {
        const id = Math.max(...(todos.map((todo) => todo.id))) + 1;

        todo = {...todo, id}

        setTodos([...todos, todo])
      }

    return (
        <TodoContext.Provider value={[todos, setTodos, addTodo]}>
            {props.children}
        </TodoContext.Provider>
    )
}
