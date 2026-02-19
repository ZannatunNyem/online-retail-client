import { useState } from "react";
import Swal from "sweetalert2";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Order Confirmed 🎉",
      width: 500,
      background: "#f3f4f6",
      confirmButtonText: "Close",
      confirmButtonColor: "#2563eb",
      html: `
        <div style="
          text-align:left;
          font-family:Arial;
          background:white;
          padding:20px;
          border-radius:12px;
          box-shadow:0 6px 14px rgba(0,0,0,0.15);
        ">
          <h3 style="margin-bottom:10px;color:#111827;">
            🧾 Order Receipt
          </h3>

          <hr/>

          <p><b>Customer:</b> ${formData.fullName}</p>
          <p><b>Email:</b> ${formData.email}</p>
          <p><b>Phone:</b> ${formData.phone}</p>

          <hr/>

          <p><b>Product:</b> ${formData.product}</p>
          <p><b>Shipping Address:</b><br/>
          ${formData.address}, ${formData.city}</p>

          <hr/>

          <p style="
            color:green;
            font-weight:bold;
            margin-top:10px;
          ">
            ✅ Your order has been placed successfully!
          </p>
        </div>
      `,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 shadow-xl rounded-xl bg-secondary">
      <h2 className="text-3xl font-semibold mb-6 text-center text-base-100">
        Checkout Information
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="input input-bordered w-full bg-secondary"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="input input-bordered w-full bg-secondary"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="input input-bordered w-full bg-secondary"
          required
        />

        <input
          type="text"
          name="product"
          placeholder="Product Name"
          onChange={handleChange}
          className="input input-bordered w-full bg-secondary"
          required
        />

        <textarea
          name="address"
          placeholder="Street Address"
          onChange={handleChange}
          className="textarea textarea-bordered w-full bg-secondary"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="input input-bordered w-full bg-secondary"
          required
        />

        <button className="btn btn-accent text-primary mt-4">
          Place Order
        </button>
      </form>
    </div>
  );
}
