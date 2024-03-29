import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Context';

const Header = () => {
    const { cart, setCart } = useContext(CartContext);
  return (
    <div>
        <span className="header">React Context API Tutorial</span>
        <ul className="nav">
            <li className="prod">
                <Link to="/">Home Page</Link>
            </li>
            <li className="prod1">
            <Link to="/cart">Cart ({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
