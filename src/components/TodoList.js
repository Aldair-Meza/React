import React from 'react'
import TodoItems from './TodoItems'

const TodoList = ({todos, setTodos, setEdit}) => {

    const handleDelete = ({id}) => {
        let newtodos = todos.filter((todo) => todo.id!==id)
        setTodos(newtodos);
    }

    const setComplete = (todo) =>{
       const newTodos =  todo.map((item)=>{
            if(item.id === todo.id){
                return{...item,completed:!item.completed}

            }else{
                return item;
            }
        })
        setTodos (newTodos)

    }
    return (
        <div>
            {todos.map((todo) =>(
                <TodoItems key={todo.id} todo={todo} handleDelete={handleDelete} setComplete={setComplete} setEdit={setEdit} />
            ))}
        </div>
    )
}

export default TodoList
