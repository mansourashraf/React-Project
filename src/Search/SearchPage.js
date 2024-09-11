import React from 'react'
import Navbar from '../Home/Navbar';
import Search from '../Home/Search';
import Footer from '../Home/Footer';
import { CartProvider} from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
function SeachPage() {
  return (
    <CartProvider>
      <Navbar/>
      <Search/>
      <Footer/>
      <ScrollToTop smooth />
    </CartProvider>
  )
}
export default SeachPage;