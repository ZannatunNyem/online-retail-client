import React from "react";
import Home from "../Pages/Home";
import NavBar from "../Components/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
