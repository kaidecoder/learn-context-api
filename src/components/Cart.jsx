import React,{useState, useEffect} from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart, setCart}) => {
    const [total, setTotal] = useState(null)
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
              return  <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
            })}
        </div>
    </div>
  )
}

export default Cart
