import React from 'react'

const Header = ({saldinicial,saldfinal}) => {
    return (
        <fieldset>
        <>
        <div className='header'>
            <h1>Manejo de Ingresos</h1>
            <input type='text' placeholder={`Saldo Inicial: ${saldinicial}`} />
            <input type='number' placeholder={`Saldo Final: ${saldfinal}`}/>

        </div>
        </>
        </fieldset>


)


}


export default Header;
