import React, { useEffect } from "react";
import girl from "../../img/girl-1.png";
import circle from "../../img/circle.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { IoMdLock } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl items-center gap-8 md:gap-0">
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 md:pl-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p className="text-base sm:text-lg text-primary hidden lg:block">
            Discover trending products, unbeatable prices, and a seamless
            shopping experience.
          </p>
        </div>

        <div className="col-span-1 md:col-span-6 flex justify-center items-center relative order-first md:order-none">
          <img
            src={circle}
            className="w-64 sm:w-80 lg:w-150 absolute"
            data-aos="fade-down"
            alt=""
          />
          <img
            src={girl}
            className="w-64 sm:w-80 lg:w-150 relative"
            data-aos="fade-up"
            alt=""
          />
        </div>

        <div className="col-span-1 md:col-span-3 hidden md:block gap-6 md:pr-10 ">
          <div
            className="relative pt-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <IoMdLock className="absolute top-2 -left-4 text-4xl sm:text-5xl bg-white rounded-full p-2 shadow-lg" />
            <div className="bg-primary shadow-xl rounded-2xl p-4 sm:p-5 pt-8">
              <h3 className="font-bold text-sm sm:text-base">Secure Payment</h3>
              <p className="text-gray-500 text-xs sm:text-sm hidden lg:block">
                100% protected checkout
              </p>
            </div>
          </div>

          <div
            className="relative pt-6"
            data-aos="fade-left"
            data-aos-duration="1400"
          >
            <IoMdPricetags className="absolute top-2 -left-4 text-4xl sm:text-5xl bg-white rounded-full p-2 shadow-lg" />
            <div className="bg-primary shadow-xl rounded-2xl p-4 sm:p-5 pt-8">
              <h3 className="font-bold text-sm sm:text-base">Best Prices</h3>
              <p className="text-gray-500 text-xs sm:text-sm hidden lg:block">
                Deals updated daily. shipping worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
