import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopProductCards from "./ShopProductCards";
import Loading from "./Loading";

export default function ShopProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = category
      ? `https://online-retail-server.vercel.app/products/category?category=${category}`
      : `https://online-retail-server.vercel.app/products/category`;

    setLoading(true); // start loading when category changes
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ShopProductCards key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
