import React, { useEffect } from 'react'
import {v4 as uuid4} from 'uuid';
import PropTypes from 'prop-types'


const Formulario = ({input, setInput, todos, setTodos, edit, setEdit, valor, setValor, contar, setContar}) => {
    const handleInputChange = ({target}) =>{
        setInput(target.value);
        
    }

    const handleValorChange = ({target}) =>{
        setValor(target.value);
        
    }

    const handleAdd = () => {
        setContar (contar + 1);
    }

    const handleSubmit = (e) =>{        
        e.preventDefault();        
        if(edit){
            updateTodo(edit.id, input, edit.completed)

        }else{
        const newtodo = {id:uuid4(), title:input,completed:false}
        setTodos([...todos, newtodo])
        setInput("");
    }
    }

    const updateTodo = (id, title, completed) => {
        const newTodos = todos.map((todo)=>
            todo.id === id ? {id, title, completed}: todo
        )
        setTodos(newTodos)
        setEdit(null)
    }

    useEffect(() => {
      if (edit) {
          setInput(edit.title)          
      }else{
        setInput('')
      }
    }, [edit, setInput])


    return (
        <>
        <form onSubmit={handleSubmit}>
            
            <label for='Movimiento'>Tipo de movimiento: </label>
                <select name='Tipo Movimiento'>
                    <option value = 'Ingreso'>Ingreso</option>
                    <option value = 'Egreso'>Egreso</option>
                </select>
                <p/>
                <label for='Nombre'>Nombre: </label>
                <input type='text' placeholder='Enter to Todo'
                className='task-input'
                value={input}
                onChange={handleInputChange}
                required/>
                <p/>
                <label for='Cantidad'>Cantidad: </label>
                <input type='number'
                placeholder='Enter to Todo'
                className='task-valor'
                value={valor}
                onChange={handleValorChange}                
                required/>

                <p/>
            <button className='button-cancel' type='submit'>
                Cancelar
            </button>
            <button onClick={handleAdd} className='button-add' type='submit'>
                {edit ? 'Edit' : 'Agregar'}                 
            </button>
            
        </form>
        <h3>Listado de movimientos</h3>
        <h2>{contar}</h2>
           </>
    )
}


export default Formulario
