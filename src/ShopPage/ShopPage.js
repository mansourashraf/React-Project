import React from 'react'
import Navbar from '../Home/Navbar';
import Shop from '../Home/Shop';
import Footer from '../Home/Footer';
import { CartProvider} from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

function ShopPage() {
  return (
    <CartProvider>
        <Navbar/>
        <Shop/>
        <Footer/>
        <ScrollToTop smooth />
    </CartProvider>
  )
}
export default ShopPage;