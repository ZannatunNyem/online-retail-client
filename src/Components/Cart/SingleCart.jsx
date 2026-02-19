import React, { useContext } from "react";
import { CartContext } from "../../Auth/CartContext";

export default function SingleCart({ item }) {
  const { deleteItems } = useContext(CartContext);
  const handleDelete = () => {
    deleteItems(item._id);
  };

  return (
    <div>
      <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">Available: {item.availableTime}</p>
            <p className="text-base-100 font-bold mt-1">${item.cost}</p>
          </div>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition mt-2 sm:mt-0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
