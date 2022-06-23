import React, { useState } from "react";
import "./navbar.css"
import "./ItemCount"


const ItemListContainer = ({placeholder}) => { 
    return (
        <div className="container">
    <p>Registrese para recibir ofertas:</p>    
    <div type='text' placeholder={placeholder}/>            
    <input className="formulario"  placeholder ='Ingrese Nombre'/>
    <input className="formulario" placeholder ='Ingrese Apellido'/> 
    <input className="formulario" placeholder ='Ingrese Email'/>  
    <button style={{margin: '10px'}}>Registrarse</button>   
    </div> 
    )
};


    



export default ItemListContainer