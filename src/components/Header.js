import React from 'react'

const Header = () => {
    return (
        <fieldset>
        <>
        <div className='header'>
            <h1>Manejo de Ingresos</h1>
            <input type='text' placeholder='Saldo inicial' value='1,000,000' />
            <input type='number' placeholder='Saldo final'/>

        </div>
        </>
        </fieldset>


)


}


export default Header;
