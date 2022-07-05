import React from "react";
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Cart from './Components/Cart/Cart'





function App() {
  const greeting= "Bienvenidos a Apple Store"
  return (
    <BrowserRouter>      
        <Navbar/>
        <ItemCount maxStock={12} minStock={1}/>
        <Routes>
          <Route path="/" element ={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
          </Routes>
        
        <hr></hr>
        
    </BrowserRouter>  
  );  
};

export default App;
