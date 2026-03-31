import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import OnlineProducts from "../Components/Home/OnlineProducts";
import Feature from "../Components/Home/Feature";
import Comment from "../Components/Home/Comment";
import Loading from "./Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://online-retail-server.vercel.app/products/category")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        d;
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner></Banner>
      <OnlineProducts products={products}></OnlineProducts>
      <Comment></Comment>
      <Feature></Feature>
    </div>
  );
}
