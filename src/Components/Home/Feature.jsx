import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaLock,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

export default function Feature() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x text-center mx-5 my-15">
        <div className="px-6">
          <FaTruck className="text-4xl mx-auto " />
          <h3>FREE DELIVERY</h3>
          <p>Worldwide</p>
        </div>

        <div className="px-6">
          <FaHeadset className="text-4xl mx-auto " />
          <h3>24/7 SUPPORT</h3>
          <p>Customer Support</p>
        </div>

        <div className="px-6">
          <FaLock className="text-4xl mx-auto " />
          <h3>PAYMENT</h3>
          <p>Secure System</p>
        </div>

        <div className="px-6">
          <FaCheckCircle className="text-4xl mx-auto " />
          <h3>TRUSTED</h3>
          <p>Genuine Products</p>
        </div>
      </div>
    </div>
  );
}
