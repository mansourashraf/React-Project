import React from 'react'
import Navbar from '../Home/Navbar'
import About from '../Home/About'
import Footer from '../Home/Footer'
import { CartProvider } from "react-use-cart";
function AboutPage() {
  return (
    <CartProvider>
        <Navbar/>
        <About/>
        <Footer/>
    </CartProvider>
  )
}
export default AboutPage