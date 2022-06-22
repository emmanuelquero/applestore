import React from 'react';

const ItemCount = ({ cantidad }) => {
    
    let MiNumero = 0;
    const handlerClick = () =>{
        MiNumero++; 
    }
    return (
        <>
        <div>{cantidad}</div>
        <h1>{MiNumero}</h1>
        <button onClick={handlerClick}>Clickea Gato</button>
        </>
        
    );
}
export default ItemCount