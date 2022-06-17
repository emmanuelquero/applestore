import React from "react";
import logo from "../assets/logotienda.jpg"
import logo2 from '../assets/carrito.png';
import "./navbar.css"




const Navbar = () =>{
    return (
        <body>
        <header>
        <img src={logo} alt="" />
        <h1>Apple Store</h1>
        <nav>
            <a href="">PRODUCTOS USADOS</a>
            <a href="">PREGUNTAS FRECUENTES</a>
            <a href="">CONTACTO</a>
        </nav>
        <img src={logo2} alt="" />
        </header>
        <div>
            <hr></hr>
            <h2>PRODUCTOS ACTUALIZADOS</h2>            
        </div>
        <hr></hr>
        <footer>
            <p>Autor: Emanuel Quero</p>
        </footer>

       </body> 
    )
}

export default Navbar

