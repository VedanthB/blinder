import "./App.css";

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";

import Shop from "./routes/Shop";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Header from "./components/global/header/Header";
import Footer from "./components/global/Footer";

/* External Imports */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* header / nav */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
