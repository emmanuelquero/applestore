import React from "react";
import logo from "../assets/logotienda.jpg"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget';
import imagen1 from "../assets/Iphone13.png";
import { Link , NavLink} from "react-router-dom"




const Navbar = () =>{

    const categories = [
        {name: "Usados", id: 0, route:"/category/Usados"},
        {name: "PreguntasFrecuentes", id: 1, route:"/category/PreguntasFrecuentes"},
        {name: "Contacto", id: 1, route:"/category/Contacto"},
    ];

    return (
        <body className="container">
        <header>
        <div className="container">
            <div className="row">                
                <div className="col-md-2">
                   <Link to="/"> <img className="imagen" src={logo} alt="" /></Link>
                </div>
                <div className="col-md-4">
                    <h1 className="text-center">Apple Store</h1> 
                </div>
                <div className="col-md-4">
                    <nav>
                        {categories.map((category)=> <NavLink key={category.id}  to={category.route}>{category.name}</NavLink>)}
                        
                    </nav>
                </div>
                <div className="col-md-2">
                  <Link to="/cart"><CartWidget /></Link>
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

