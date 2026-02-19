import { useState, useContext } from "react";
import { CartContext } from "../Auth/CartContext";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

function useAddToCart() {
  const { refetchCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  function addToCart(cartData) {
    console.log("user:", user);
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login First!",
      });
      return;
    }

    setLoading(true);

    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetchCart();
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Item has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return { addToCart, loading };
}

export default useAddToCart;
