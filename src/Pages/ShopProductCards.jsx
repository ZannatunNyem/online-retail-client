import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, CreditCard } from "lucide-react";
import { AuthContext } from "../Auth/AuthContext";
import { CartContext } from "../Auth/CartContext";
import useAddToCart from "../Hooks/UseAddToCart";

export default function ShopProductCard({ product }) {
  const { user } = useContext(AuthContext);
  const { refetchCart } = useContext(CartContext);
  const { addToCart, loading } = useAddToCart(refetchCart);
  const { _id, title, shop, priceRange, image } = product;

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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition w-full max-w-xs overflow-hidden ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>

      <div className="p-3 space-y-1">
        <h3 className="text-md font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{shop}</p>

        <div className="text-sm font-bold mt-1">
          ৳{priceRange.min} – ৳{priceRange.max}
        </div>

        <div className="flex gap-2 mt-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-1 bg-base-100 text-white py-1 rounded-md hover:border-base-100 hover:bg-primary transition"
          >
            <ShoppingCart size={20} />
          </button>

          <Link
            to={`/checkout`}
            className="flex-1 flex items-center justify-center gap-1 border border-base-100 text-base-100 py-1 rounded-md hover:bg-base-100 hover:text-white transition"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
