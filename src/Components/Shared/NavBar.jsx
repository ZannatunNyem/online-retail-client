import React, { use, useEffect } from "react";
import { Link } from "react-router-dom";
import Damazon from "../Logo/Damazon";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { CartContext } from "../../Auth/CartContext";
import userImg from "../../img/no_user.png";

export default function NavBar() {
  const { user, signOutUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const link = (
    <>
      <li>
        <Link to={"/allProducts"}>Shop</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/location"}>Our Location</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div>
      <div className="navbar  mt-5 z-50  relative text-primary ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"}>
            <Damazon></Damazon>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="dropdown dropdown-end navbar-end">
          <Link to={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item bg-base-300 text-primary border-0">
                  {cart.length}
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:btn-primary btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src={user?.photoURL || userImg} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between flex">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li>
              {user ? (
                <a onClick={handleLogout}>Logout</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
