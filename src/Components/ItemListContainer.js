import React from 'react';


const ItemListContainer = ({app, name }) => {
    console.log ('ItemListContainer props:',{app , name});
    return (
        <div>
        <h3>Hola {name}</h3>
        <h4>Weee: {app}</h4>    
        </div>
        
    );
};

export default ItemListContainer