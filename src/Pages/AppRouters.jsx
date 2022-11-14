import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./MainPages/Footer";
import HomePage from "./MainPages/HomePage";
import LoginPage from "./MainPages/LoginPage";
import BlogPage from "./MainPages/BlogPage";
import Nav from "./Nav";
import AboutPage from "./MainPages/AboutPage";
import ContactPage from "./MainPages/ContactPage";
import StorePage from "./MainPages/StorePage";
import { CartProvider } from "react-use-cart";
import { useState, useEffect } from "react";
import RenderCart from "./MainPages/RenderCart";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./MainPages/authenticationFiles/Login";
import Bestsellers from "./MainPages/Bestsellers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
const AppRouters = () => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <BrowserRouter>
    <ToastContainer pauseOnHover={false} autoClose={1000}/>
      <CartProvider>
        <Nav color={mode} setColor={setMode} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/blogPage" element={<BlogPage />}></Route>
          <Route path="/aboutus" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/store" element={<StorePage />}></Route>
          {/* <Route path="/cart" element={<RenderCart />}></Route> */}
          <Route path="/bestsellers" element={<Bestsellers />}></Route>
          <Route path="/admin" element={<Login />}></Route>
        </Routes>
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
};

AOS.init({
  mirror: true,
});
export default AppRouters;
