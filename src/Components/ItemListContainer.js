import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {  getProducts } from '../mocks/fakApi'
import { useParams } from 'react-router-dom'




const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] =useState(true)

    const {categoryId} = useParams ();
       
    useEffect (()=>{
        console.log(categoryId)
        setLoading (true)
        getProducts(categoryId)
        .then((result)=>setProductList(result))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading (false))
       
    },[categoryId])
    
   
    return (
        <div className="container">
            <h1>{greeting}</h1>
            {loading ? <p>Cargando.-.-.-.-</p> : <ItemList productList={productList}/> }            
        </div> 
    )
}  

export default ItemListContainer