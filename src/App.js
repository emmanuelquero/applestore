import React from "react";
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from "./Components/ItemDetailContainer";




function App() {
  const greeting= "Bienvenidos a Apple Store"
  return (
    <div>
        <Navbar/>
        <ItemCount maxStock={12} minStock={1}/>
        <hr></hr>
        <ItemListContainer greeting={greeting} /> 
        <hr></hr>
        <ItemDetailContainer />
         </div>     
  );  
};

export default App;
