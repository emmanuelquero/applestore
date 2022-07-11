import React from "react";
import logo from "../assets/logotienda.jpg"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget';
import imagen1 from "../assets/Iphone13.png";
import { Link } from 'react-router-dom';

const categories = [
    {estado: 'Home', id: 0, route:'/'},
    {estado: 'Usados', id: 1, route:'/category/Usados'},
    {estado: 'PreguntasFrecuentes', id: 2, route:'/category/PreguntasFrecuentes'},
    {estado: 'Nuevos', id: 3, route:'/category/Nuevos'},
];



const Navbar = () =>{

        return (
        <body className="container">
        <header>
        <div className="container">
            <div className="row">                
                <div className="col-md-2">
                   <img className="imagen" src={logo} alt="" />
                </div>
                <div className="col-md-4">
                    <h1 className="text-center">Apple Store</h1> 
                </div>
                <div className="col-md-4">
                    <nav>
                        <ul>
                        {categories.map((category)=> (
                        <Link to={category.route} key={category.id}>{category.estado}</Link>
                        ))}
                       </ul> 
                    </nav>
                </div>
                <div className="col-md-2">
                  <CartWidget />
                </div>                    
                </div>            
        </div>
        </header>   
    
   <div className="container">            
            <h2 className="text-center">ULTIMOS PRODUCTOS ACTUALIZADOS</h2>  
            <div>
            <img src={imagen1} alt="iphone13"/>
            <p>Iphone 13. (500.000$)</p>
            <p>Stock: 12</p>     
            </div>                  
        </div>           
        </body> 
    )
}

export default Navbar

