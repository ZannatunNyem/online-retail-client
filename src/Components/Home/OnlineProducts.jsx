import React, { use } from "react";
import ProductCard from "../Card/ProductCard";

export default function OnlineProducts({ products }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary text-center py-5">
        Best Products in Low Price
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
