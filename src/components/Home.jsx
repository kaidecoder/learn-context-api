import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);
const Home = ({cart, setCart}) => {


  const productsArray = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  const [products, setProducts] = useState(productsArray);
  console.log(cart);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>;
      })}
    </div>
  );
};

export default Home;
