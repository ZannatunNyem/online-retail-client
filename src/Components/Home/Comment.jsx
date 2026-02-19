import React from "react";
import people from "../../img/people.jpg";

export default function Comment() {
  return (
    <div>
      <div className="bg-primary  py-12 px-6 my-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={people}
            alt="customer"
            className="w-32 h-32 rounded-full object-cover"
          />

          <div>
            <p className="text-lg italic">
              “This shop is amazing! Delivery was super fast and the quality is
              perfect. I’ll definitely order again.”
            </p>

            <h4 className="mt-4 font-bold">Happy Customer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
