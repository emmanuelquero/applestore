import React, { useState, useEffect} from 'react';
import { getInfo } from '../mocks/fakApi';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState(true)


useEffect(()=>{
    getInfo ()
    .then((res) => {
        setProduct(res);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally (()=> {
        setLoading (false);
        });
}, []);

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