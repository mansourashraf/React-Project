import React from 'react'
import Navbar from '../Home/Navbar';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { CartProvider} from "react-use-cart";
 function HeaderPage() {
  return (
    <CartProvider>
        <Navbar/>
        <Header/>
        <Footer/>
    </CartProvider>
  )
}
export default HeaderPage;