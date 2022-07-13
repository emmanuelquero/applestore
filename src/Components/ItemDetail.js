import React from 'react'


const ItemDetail = ({ product }) => {
    return (
        <div className='container'>
            <img src={product.img} alt={product.name} />
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>{product.stock}</h3>
                <h4>{product.estado}</h4>
            </div>
           
        </div>
        
        
    )
}

export default ItemDetail