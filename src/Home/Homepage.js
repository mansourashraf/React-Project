import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import"../style.css";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

 function Homepage() {
  return (
    <CartProvider>
        <Navbar/>
        <Header/>
        <Footer/>
        <ScrollToTop smooth />
    </CartProvider>
  )
}
export default Homepage;