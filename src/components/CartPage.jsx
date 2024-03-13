import React,{useState, useEffect, useContext} from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from './Context';

const CartPage = () => {
    const [total, setTotal] = useState(null)
    const { cart } = useContext(Cart);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])
  return (
    <div>
        <span style={{fontSize: 30}}>My Cart</span>
        <br />
        <span style={{ fontSize: 30}}>Total: ${total}</span>
        <div className="productContainer">
            {cart.map((prod)=> {
              return  <SingleProduct prod={prod} key={prod.id} />
            })}
        </div>
    </div>
  )
}

export default CartPage
