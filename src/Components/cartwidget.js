import React from 'react';
import './styles/CartWidget.css';
import logo2 from '../assets/carrito.png'
import { Link } from 'react-router-dom';

const CartWidget = () => {
 
  return (
    <div className="cart-widget">
      <Link to={'/Cart'}><img src={logo2} size="2px" color="black" alt="carrito"></img></Link>
      </div>  
  );
};

export default CartWidget;
