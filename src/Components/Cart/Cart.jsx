import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import SingleCart from "./SingleCart";
import { CartContext } from "../../Auth/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-primary">
          My Cart : {cart.length} Item
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {cart.map((item) => (
            <SingleCart key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
