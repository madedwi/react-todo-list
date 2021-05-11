import {useState, useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'

const FormTodoList = () => {

    const [name, setName] = useState('')

    const [todos, setTodos, addTodo] = useContext(TodoContext)

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onAddTodo = (e) => {
        e.preventDefault()

        addTodo({label: name, completed: false, checked:false})
        setName('')
    }

    return (
        <div className="add-items d-flex"> 
            <input type="text" 
                className="form-control todo-list-input"
                placeholder="What do you need to do today?"
                value={name}
                onChange={onChangeName} /> 
            <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={onAddTodo}>Add</button> 
        </div>
    )
}

export default FormTodoList
