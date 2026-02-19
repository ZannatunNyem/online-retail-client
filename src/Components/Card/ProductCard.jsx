import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { CartContext } from "../../Auth/CartContext";
import Swal from "sweetalert2";
import useAddToCart from "../../Hooks/UseAddToCart";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { refetchCart } = useContext(CartContext);
  const { addToCart, loading } = useAddToCart(refetchCart);
  const {
    _id,
    title,
    location,
    description,
    shop,
    priceRange,
    category,
    productType,
    stockDeadline,
    image,
  } = product;

  const handleAddToCart = () => {
    if (!user) {
      addToCart();
      return;
    }
    const cartData = {
      email: user.email,
      name: product.title,
      cost: product.priceRange.min,
      availableTime: product.stockDeadline,
      image: product.image,
    };
    addToCart(cartData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-sm overflow-hidden border">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-sm text-gray-500">
          {shop} • {location}
        </p>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="text-xl font-bold text-base-100">
          ৳{priceRange.min} – ৳{priceRange.max}
        </div>

        <div className="flex gap-2 flex-wrap text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{productType}</span>
        </div>

        <p className="text-xs text-gray-400">
          Available until: {stockDeadline}
        </p>

        <div className="flex gap-2 mt-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 hover:scale-105 bg-base-100 text-white py-2 rounded-lg hover:opacity-50"
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate(`/products/${_id}`)}
            className="flex-1 border border-base-100 text-base-100 py-2 rounded-lg hover:bg-base-100 hover:text-white transition"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
