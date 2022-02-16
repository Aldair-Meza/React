import React, { useEffect } from 'react'
import {v4 as uuid4} from 'uuid';
import PropTypes from 'prop-types'


const Formulario = ({input, setInput, todos, setTodos, edit, setEdit, valor, setValor,
     contar, setContar, movimiento, setMovimiento, saldinicial, setSaldinicial,
      saldfinal, setSaldfinal, buscar, setBuscar}) => {
    const handleInputChange = ({target}) =>{
        setInput(target.value);
        
    }

    const calcularSaldo = (movimiento, valor) =>{
        if (movimiento == 'Ingreso') {
            let total = parseInt(saldfinal) + parseInt(valor)
            setSaldfinal(total)
        }else{
            let total = parseInt(saldfinal) - parseInt(valor)
            setSaldfinal(total)
        }

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
            updateTodo(edit.id, input,movimiento,valor)

        }else{
        const newtodo = {id:uuid4(), title:input, movimiento:movimiento, cantidad:valor}
        setTodos([...todos, newtodo])
        console.log(newtodo.movimiento)
        calcularSaldo(newtodo.movimiento, newtodo.cantidad)
        handleAdd();
        setInput("");
        setMovimiento("");
        setValor("");
    }
    }

    const updateTodo = (id, title,movimiento,cantidad) => {
        const newTodos = todos.map((todo)=>
            todo.id === id ? {id, title,movimiento,cantidad}: todo
        )
        setTodos(newTodos)
        console.log(newTodos[0].movimiento)
        calcularSaldo(newTodos[0].movimiento, newTodos[0].cantidad)
        setEdit(null)
    }

    const handleSelect = ({target}) =>{
        setMovimiento(target.value)

    }

    const onBuscarChange = ({target}) =>{
        setBuscar(target.value)

    }

    useEffect(() => {
      if (edit) {
          setInput(edit.title)
          setMovimiento(edit.movimiento)
          setValor(edit.cantidad)             
      }else{
        setInput('')
        setMovimiento("Ingreso");
        setValor("");
      }
    }, [edit, setInput, setValor, setMovimiento])


    return (
        <>
        <form className='card card-body' onSubmit={handleSubmit}>
            <div>
                <h3>Registro Movimiento</h3>
            </div>
            
            <label htmlFor='Movimiento'>Tipo de movimiento: </label>
                <select onChange={handleSelect} name='Tipo Movimiento' required defaultValue={'Ingreso'}>
                    <option value = 'Ingreso'>Ingreso</option>
                    <option value = 'Egreso'>Egreso</option>                
                </select>
                <p/>
                <label htmlFor='Nombre'>Nombre: </label>
                <input type='text' placeholder='Enter to Todo'
                className='task-input'
                value={input}
                onChange={handleInputChange}
                required/>
                <p/>
                <label htmlFor='Cantidad'>Cantidad: </label>
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
            <button className='button-add' type='submit'>
                {edit ? 'Edit' : 'Agregar'}                 
            </button>
            
        </form>
        <h3>Listado de movimientos</h3>
        <h2> {contar}</h2>

        <input
            type='text'
            className='mb-4 form-control'
            placeholder='Buscar'
            value={buscar}
            onChange={onBuscarChange}
        />
           </>
    )
}


export default Formulario
