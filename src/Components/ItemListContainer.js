import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getData } from '../mocks/fakApi'
import { useParams } from 'react-router-dom'




const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] =useState(true)

    const {categoryId} = useParams ();
       
    useEffect (()=>{
        console.log(categoryId)
        getData
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