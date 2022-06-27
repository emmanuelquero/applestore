import React from 'react'
import Item from './Item'

const ItemList = (productList) => {
   // const {productList}=props
    return (
        <div>
            <h3>Lista de productos</h3> 
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            {productList.map((product)=><Item key={product.id} product={product}/>)}
            </div> 
        </div>
    )
}

export default ItemList