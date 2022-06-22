import React from 'react';
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";



const App = () => {
  return (
    <div>
        <Navbar/>
        <ItemListContainer />
        <ItemCount />
        
         
    </div>
   
    

  )
  
}

export default App;
