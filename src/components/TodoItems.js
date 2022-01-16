import React from 'react'
import { FaEdit, FaTrashAlt} from 'react-icons/fa';

const TodoItems = ({todo, handleDelete, setEdit}) => {
    return (
        <li className='list-item'>            
           <input type="text" value={todo.title} onChange={(e) => e.preventDefault} /> 
           <div>
               
               <button onClick={() => setEdit (todo)}>
                   <FaEdit />
               </button>
               <button onClick={() =>handleDelete (todo)}>
                   <FaTrashAlt />
               </button>
           </div>
        </li>
    )
}

export default TodoItems
