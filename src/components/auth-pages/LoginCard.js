import React from "react";
import { Link } from "react-router-dom";

function LoginCard() {
  return (
    <div
      style={{ margin: "auto", backgroundColor: "#0000227c" }}
      className="h=96 w-96 p-10 shadow-2xl rounded-2xl"
    >
      <h3 className="text-2xl font-normal text-center text-white mb-20">
        Login
      </h3>

      <div className="mb-5">
        <div className="input-container text-white">
          <input
            type="text"
            id="email"
            className="input-outlined input-outlined-cyan"
            autocomplete="off"
            placeholder=" "
          />
          <label
            style={{ backgroundColor: "#0000227c" }}
            for="email"
            className="input-label"
          >
            Email *
          </label>
        </div>
      </div>

      <div className="mb-5">
        <div className="input-container text-white">
          <input
            type="text"
            id="email"
            className="input-outlined input-outlined-cyan"
            autocomplete="off"
            placeholder=" "
          />
          <label
            style={{ backgroundColor: "#0000227c" }}
            for="email"
            className="input-label "
          >
            Password *
          </label>
        </div>
      </div>

      <div className="flex justify-between mb-10">
        <Link
          to="/signup"
          className="btn btn-link-cyan text-white"
          style={{ padding: 0 }}
        >
          Sign Up ?
        </Link>

        <Link
          to="/"
          className="btn btn-link-cyan text-white mb-5 pl-0"
          style={{ padding: 0 }}
        >
          Forgot Password ?
        </Link>
      </div>

      <button
        style={{ background: "transparent" }}
        className="btn btn-outline-cyan justify-center w-full text-white mb-5"
      >
        Login With Test Credentials
      </button>

      <button className="btn btn-solid-cyan justify-center w-full text-white">
        Login
      </button>
    </div>
  );
}

export default LoginCard;
