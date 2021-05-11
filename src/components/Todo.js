import { useContext } from 'react'
import {FaTimes, FaCheck} from 'react-icons/fa'

import {TodoContext} from '../contexts/TodoContext'

const Todo = ({label, completed, checked, id}) => {

    const [todos, setTodos] = useContext(TodoContext)

    const handleOnChange = () => {
        setTodos(todos.map(todo => todo.id === id 
            ? {...todo, checked: !todo.checked}
            : todo ))
    }

    const toggleCompleted = () => {
        setTodos(todos.map(todo => todo.id === id 
            ? {...todo, completed: !todo.completed}
            : todo ))
    }

    const deleteTodo = () => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <li className={`${completed ? 'completed' : ''}`}>
            
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" 
                        type="checkbox" 
                        checked={checked}
                        onChange={handleOnChange} />
                    {label} <i className="input-helper"></i>
                </label>
            </div>
            <div style={{ marginLeft:'auto'}}>
                <FaCheck color={completed ? 'gray' : 'green'} style={{marginRight:'15px', cursor:'pointer'}}
                    onClick={toggleCompleted} />
                {completed===false && <FaTimes color="red" style={{cursor:'pointer'}} 
                    onClick={deleteTodo} />}
            </div>
        </li>
    )
}

export default Todo
