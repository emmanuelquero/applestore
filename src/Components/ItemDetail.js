import React from 'react'

const ItemDetail = ({ product }) => {
    return (
        <div>
            <img src={product.img} alt={product.name} />
            <div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>{product.stock}</h3>
            </div>
        </div>
    )
}

export default ItemDetail