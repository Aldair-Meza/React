import React from 'react'
import TodoItems from './TodoItems'

const TodoList = ({todos, setTodos, setEdit}) => {

  

    const handleDelete = ({id}) => {
        let newtodos = todos.filter((todo) => todo.id!==id)        
        setTodos(newtodos);
        

    }

    
    return (
        <div className='list'>
            {todos.map((todo) =>(
                <TodoItems key={todo.id} todo={todo} handleDelete={handleDelete} setEdit={setEdit} />
            ))}
        </div>
    )
}

export default TodoList
