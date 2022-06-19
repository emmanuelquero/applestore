import React from 'react';
import './styles/CartWidget.css';
import logo2 from '../assets/carrito.png'

const CartWidget = () => {
 
  return (
    <div className="cart-widget">
      <img src={logo2} size="2px" color="black" alt="carrito" />      
    </div>
  );
};

export default CartWidget;
