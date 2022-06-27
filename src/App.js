import React from "react";
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";



const App = () => {
  const greeting= "bienvenidos"
  return (
    <div>
        <Navbar/>
        <ItemCount maxStock={5} minStock={1}/>
        <hr></hr>
        <ItemListContainer greeting={greeting} />       
    </div>     
  );  
};

export default App;
