import React, { useState } from 'react'
import "./ItemListContainer"

const ItemCount = ({ cantidad }) => {
    
    const [contador, setContador] = useState (0);
        console.log (contador);   
    
    
    const handlerClick = () =>{
        setContador(contador + 1);

    }
    const handlerClickRestar = () =>{
        setContador(contador - 1 );
    }
    const reset = () => {
        setContador ();
    }
    return (
        <div className='container'>
        <div>{cantidad}</div>
        <h1>{contador}</h1>
        <button style={{margin: '10px'}} onClick={handlerClick}>Agregar al Carrito</button>
        <button style={{margin: '10px'}} onClick={handlerClickRestar}>Quitar del Carrito</button>
        <button onClick={reset}>Cancelar Operación</button>
        </div>
        
    );
}
export default ItemCount



