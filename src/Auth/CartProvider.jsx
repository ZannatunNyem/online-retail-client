import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

export default function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const fetchCart = () => {
    if (!user) {
      setCart([]);
      return;
    }

    fetch(`http://localhost:3000/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Error fetching cart:", err));
  };

  const deleteItems = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!result.isConfirmed) return;

      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        Swal.fire({
          title: "Deleted!",
          text: "Item removed from cart.",
          icon: "success",
        });

        fetchCart();
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const cartValue = {
    cart,
    setCart,
    refetchCart: fetchCart,
    deleteItems,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
