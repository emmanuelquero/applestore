import React, { useState, useEffect} from 'react';
import {  getOneProduct } from '../mocks/fakApi';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState(true)

    const {id} = useParams ();

useEffect(()=>{
    setLoading(true);
    getOneProduct (id)    
    .then((res) => {
        setProduct(res);
    
    })
    .catch((error) => {
        console.log(error);
    })
    .finally (()=> {
        setLoading (false);
        });
}, {id});

return (
    <div>
        {loading ? (
            <h2>Cargando.....</h2>
        ) : (
            <>
            <ItemDetail product={product} />
            </>
        )}
    </div>
    )
}

export default ItemDetailContainer