import React from "react";
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
//import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Cart from './Components/Cart/Cart.js'
//import ItemCount from "./Components/ItemCount";





function App() {
  const greeting= "Bienvenidos a Apple Store"
  return (    
    <BrowserRouter className="container">      
        <Navbar/> 
        <Routes>
          <Route path="/" element ={<ItemListContainer greeting={greeting}/>} /> 
          <Route
                path="/category/:categoryId" 
                element ={<ItemListContainer greeting={greeting}/>} />         
          <Route path="/detail/:id" element={<ItemDetailContainer  />} />          
          <Route path='/cart' element={<Cart />}/>
          </Routes>
        
        <hr></hr>
        
    </BrowserRouter>
      
      );  
};

export default App;
