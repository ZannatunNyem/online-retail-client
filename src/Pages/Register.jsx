import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return updateUserProfile({
          photoURL: photoURL,
          displayName: name,
        });
      })
      .then(() => {
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
        console.log("Registration error:", errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage || "Something Went Wrong!",
        });
      });
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card bg-secondary w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body ">
          <h1 className="text-5xl font-bold text-base-100 text-center">
            Register!
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-secondary"
                placeholder="Name"
              />
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
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input bg-secondary"
                placeholder="Photo"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-accent mt-4 text-primary">
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-xs">
            Already have an account?{" "}
            <Link to={"/login"} className="text-base-300 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
