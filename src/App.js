import React from 'react';
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";
import "./Components/navbar.css";



const App = () => {
  return (
    <div>
        <Navbar/>
        <ItemCount />
        <hr></hr>
        <ItemListContainer />
      
        
         
    </div>
   
    

  )
  
}

export default App;
