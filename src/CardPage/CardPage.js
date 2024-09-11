import { NavLink } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row,table } from "reactstrap";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import ScrollToTop from "react-scroll-to-top";
function Cart() {
  const {
    totalItems,
      emptyCart,
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal ,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div>
      <h1 className="text-center mb-3">Cart ({totalUniqueItems})</h1>
      <div className="text-center mb-3">
         <button className="btn btn-danger ml-5"onClick={()=>emptyCart()}>Delete</button>
         </div>
         <Container>
          <Row>
            <Col md="12">
            <table className="table table-dark text-center mb-3">
        <thead>
          <th>Name</th>
          <th>quantity</th>
          <th>price</th>
          <th>Operation</th>
        </thead>
        <tbody> 
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.quantity} x {item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price*item.quantity} EGP</td>
            <td>
            <button className="btn btn-primary mr-2"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="btn btn-success mr-2"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className ="btn btn-danger"onClick={() => removeItem(item.id)}>&times;</button>
            </td>
          </tr>
        ))} 
        </tbody>
      </table>
      <h2 className="text-center">Total Number Of Items:({totalItems})</h2>
      <h2 className="text-center">Total Price is:({cartTotal})</h2>
      <div className="text-center mt-4 mb-5">
        <NavLink className="btn btn-success mr-4 " to="/">Go to Home</NavLink>
        <NavLink className="btn btn-primary" to="/product">Back Product</NavLink>
      </div>

            </Col>
          </Row>
         </Container>
         
    </div>
  );
}
     
        
function CardPage() {
   return (
     
      <CartProvider>
        <Navbar/>
        <div className='pt-5 mt-3'></div>
       <Cart/>
      <Footer/>
      <ScrollToTop smooth />
    </CartProvider>
     
   )
 }
 export default CardPage;
 
