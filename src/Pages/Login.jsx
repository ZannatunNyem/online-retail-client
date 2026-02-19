import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card bg-secondary w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body ">
          <h1 className="text-5xl font-bold text-base-100 text-center">
            Login now!
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-secondary"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-secondary"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-accent mt-4 text-primary">
                Login
              </button>
            </fieldset>
          </form>
          <p className="text-xs">
            Don't have any account?{" "}
            <Link to={"/register"} className="text-base-300 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
