import React, {useState, createContext} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  return (
    <CartContext.Provider value={{products, cart, setCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider
