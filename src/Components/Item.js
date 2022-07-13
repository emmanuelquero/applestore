import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({celular}) => {
    const {img, name, description, stock}=celular
    return(
        
        <div className="container"> 
        <div className='card'>           
           <img src={img} className="card-img-top" alt={name} />
                <p className="card-text">{name}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">{stock}</p>
                <Link to={`/detail/${celular.id}`}>Ver Detalle</Link>
                </div>
      
                
        </div>
    )
}
export default Item


