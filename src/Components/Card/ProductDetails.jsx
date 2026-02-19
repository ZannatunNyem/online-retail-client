import { Link, useLoaderData, useNavigate } from "react-router-dom";
import UseAddToCart from "../../Hooks/UseAddToCart";
import { useContext } from "react";
import { CartContext } from "../../Auth/CartContext";
import { AuthContext } from "../../Auth/AuthContext";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { refetchCart } = useContext(CartContext);
  const { addToCart, loading } = UseAddToCart(refetchCart);
  const {
    title,
    image,
    description,
    location,
    shop,
    seller_name,
    seller_email,
    priceRange,
    category,
    stockDeadline,
  } = useLoaderData();

  const handleAddToCart = () => {
    if (!user) {
      addToCart(); // this will trigger SweetAlert inside the hook
      return;
    }
    const cartData = {
      email: user.email,
      name: title,
      cost: priceRange.min,
      availableTime: stockDeadline,
      image: image,
    };
    addToCart(cartData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h1 className="text-5xl font-bold text-secondary">Product Details :</h1>

      <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl shadow-lg overflow-hidden lg:flex lg:items-center">
        <div className="lg:w-1/2 p-6">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>

        <div className="lg:w-1/2 p-6 space-y-4 relative">
          <h1 className="text-4xl font-extrabold text-gray-800">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-base-100">
              ৳{priceRange.min} – ৳{priceRange.max}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm">
              {category}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            {shop} • {location}
          </p>
          <p className="text-xs text-gray-400">
            Available until: {stockDeadline}
          </p>

          <div className="flex gap-4 mt-6 flex-col sm:flex-row">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-2xl shadow-lg hover:scale-105 transition transform"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="flex-1 border-2 border-purple-500 text-purple-500 py-3 rounded-2xl hover:bg-purple-500 hover:text-white transition"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl shadow-inner">
            <p className="font-semibold">Seller:</p>
            <p>{seller_name}</p>
            <p className="text-sm text-gray-500">{seller_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
