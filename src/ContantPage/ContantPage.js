import React from 'react'
import Navbar from '../Home/Navbar';
import Contant from '../Home/Contant';
import Footer from '../Home/Footer';
import { CartProvider} from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
function ContantPage() {
  return (
    <CartProvider>
        <Navbar/>
        <Contant/>
        <Footer/>
        <ScrollToTop smooth />
    </CartProvider>
  )
}
export default ContantPage;