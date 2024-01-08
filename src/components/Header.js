import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Order from './Order';

const showOrders = (props) => {
    let total = 0;
    props.orders.forEach(data => total += Number.parseFloat(data.price))
    return (
        <div className='box'>
            {props.orders.map(data => (
                <Order onDelete={props.onDelete} key={data.id} item={data}/>
        
            ))}
              <p className='total'>Total: {new Intl.NumberFormat().format(total)}$ </p>
        </div>
    )
}
const showNothing = () => {
    return (
        <div className='empty'>
            <h2>No goods</h2>
        </div>
    )
}
export default function Header(props) {
    let[cartOpen, setCartOpen] = useState(false);
  return (
<header >
    <div>
        <span className='logo'>House Staff</span>
       
        <ul className='nav'>
        <TiShoppingCart  onClick={() => setCartOpen(cartOpen = !cartOpen)}className={`shop-cart-button ${cartOpen && 'active'}`}/>
            <li>About us</li>
            <li>Contacts</li>
            <li>Office</li>

        </ul>
     
     {cartOpen && (
    <div className='shop-cart'>
{props.orders.length > 0 ?
showOrders(props) : showNothing() }
    </div>
     )}
    </div>
    <div className='presentation'></div>
</header>
  )
}
