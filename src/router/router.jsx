import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductDetails from "../Components/Card/ProductDetails";
import Checkout from "../Pages/Checkout";
import ShopLayout from "../Layout/ShopLayout";
import ShopProductCards from "../Pages/ShopProductCards";
import ShopProducts from "../Pages/ShopProducts";
import Cart from "../Components/Cart/Cart";
import About from "../Pages/About";
import Location from "../Pages/Location";
import Profile from "../Pages/Profile";
import PrivateRoutes from "../routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "location",
        Component: Location,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "/allProducts",
        Component: ShopLayout,
        children: [
          {
            path: ":category?",
            Component: ShopProducts,
          },
        ],
      },
    ],
  },
]);
export default router;
