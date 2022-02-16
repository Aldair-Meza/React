import React from 'react'
import { FaEdit, FaTrashAlt} from 'react-icons/fa';

const TodoItems = ({todo, handleDelete, setEdit}) => {
    console.log(todo)
    return (
        <li className='list-item'>            
           <input type="text" value={todo.title} onChange={(e) => e.preventDefault} /> 
           <div>

               <button type='button'onChange={(e) => e.preventDefault} disabled className={`btn cantidad-item ${todo.movimiento == "Ingreso" ? "btn-success" : "btn-danger"}`}>{todo.cantidad}</button>
               
               <button className='edit' type='button' onClick={() => setEdit (todo)}>
                   <FaEdit />
               </button>
               <button className='delete' type='button'onClick={() =>handleDelete (todo)}>
                   <FaTrashAlt />
               </button>
           </div>
        </li>
    )
}

export default TodoItems
