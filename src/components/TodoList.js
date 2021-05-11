import {useContext } from 'react'
import Todo from './Todo'

import {TodoContext} from '../contexts/TodoContext'


const TodoList = () => {
    const [todos] = useContext(TodoContext)

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column todo-list">
                
                {todos.map((todo) => {
                    return <Todo 
                        key={todo.id}
                        id={todo.id}
                        label={todo.label} 
                        completed={todo.completed} 
                        checked={todo.checked}  />
                })}
                
                
            </ul>
        </div>
    )
}

export default TodoList
