import React from 'react'


const Item = ({celular}) => {
    const {img, name, description, stock}=celular
    return(
        <div className="card" style={{width: '20rem', margin:'5rem'}}>
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">{stock}</p>
                </div>
                <button className='btn btn-primary'>Ver Más</button>
        </div>
    )
}
export default Item


