import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div>
      <h1 className="text-5xl mt-15 font-semibold text-center text-primary">
        Shop All Products :
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-15">
        <aside className="col-span-1  text-center">
          <div className="w-full space-y-2 sticky top-5 space-y-2">
            <NavLink
              to="/allProducts"
              className="btn w-full bg-primary border-primary text-accent"
            >
              All Products
            </NavLink>
            <NavLink
              to="Fashion"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Fashion
            </NavLink>
            <NavLink
              to="Home"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Home
            </NavLink>
            <NavLink
              to="Cosmetics"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Cosmetics
            </NavLink>
            <NavLink
              to="Lifestyle"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Lifestyle
            </NavLink>
            <NavLink
              to="Grocery"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Grocery
            </NavLink>
            <NavLink
              to="Tech"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Tech
            </NavLink>
            <NavLink
              to="Kids"
              className="btn w-full bg-primary border-primary text-accent"
            >
              Kids
            </NavLink>
          </div>
        </aside>
        <aside className="col-span-3 ">
          <Outlet></Outlet>
        </aside>
      </div>
    </div>
  );
}
