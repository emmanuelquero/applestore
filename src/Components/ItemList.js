import React from 'react'
import Item from './Item'


const ItemList = ({productList}) => {
    
    //const {productList}=props
    return (
        
        <div className='container'>
           <h3>Lista de productos</h3>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flex:'wrap'}}>
            {productList.map((celular)=><Item key={celular.id} celular={celular}/>)}
            
           </div>
           
        </div>
    )
}

export default ItemList


