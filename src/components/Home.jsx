import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";


faker.seed(100);
const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  const [products, setProducts] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;
