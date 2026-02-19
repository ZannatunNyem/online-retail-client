import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import OnlineProducts from "../Components/Home/OnlineProducts";
import Feature from "../Components/Home/Feature";
import Comment from "../Components/Home/Comment";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/category")
      .then((res) => res.json())
      .then(setProducts);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <OnlineProducts products={products}></OnlineProducts>
      <Comment></Comment>
      <Feature></Feature>
    </div>
  );
}
