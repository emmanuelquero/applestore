import React, { useState} from "react";
import "./ItemListContainer";

const ItemCount = ({ maxStock, minStock}) => {
    //console.log('Soy el contador')
    const [contador, setContador] = useState (1);

    const handlerClick = () => {
        if (contador < maxStock) {
            setContador (contador + 1);
        
    }
};
const handlerClickRestar = () => {
    if (contador > minStock) {
        setContador (contador - 1);
    }
};

const reset = () => {
    setContador ();
};

const agregar = () => {
    console.log (contador);
};

    return (
        <div className='container'>
        <h1>{contador}</h1>
        <button style={{margin: '10px'}} onClick={handlerClick}>Sumar
        </button>
        <button style={{margin: '10px'}} onClick={handlerClickRestar}>
            Restar
        </button>
        <button style={{margin: '10px'}} onClick={agregar}>Agregar al Carrito</button>
        <button style={{margin: '10px'}} onClick={reset}>Cancelar Operación</button>
        </div>
        
    );
    };

export default ItemCount



