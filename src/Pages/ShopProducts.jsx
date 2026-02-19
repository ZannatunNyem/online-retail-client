import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShopProductCards from "./ShopProductCards";

export default function ShopProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUrl = category
      ? `http://localhost:3000/products/category?category=${category}`
      : `http://localhost:3000/products/category`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [category]);

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
