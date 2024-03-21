//import logo from './logo.svg';
import './App.css';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm'
import ProductDetails from "./customer/components/ProductDetails/ProductDetails"
import ProductReviewCard from './customer/components/ProductDetails/ProductReviewCard';
import Navigation  from './customer/components/Navigation/Navigation';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from "./customer/components/Footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage.jsx";
import Product from "./customer/components/Product/Product.jsx";
import MainCrosel from './customer/components/HomeCarosel/MainCrosel.jsx'
import HomeSectionCarosel from './customer/components/HomeSectionCarosel/HomeSectionCarosel.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import HomeSectionCard from './customer/components/HomeSectionCard/HomeSectionCard.jsx';
import { men_jacket } from './Data/men_jacket.js';
import OrderSummary from './customer/components/Checkout/OrderSummary.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <MainCrosel/> 
      <Product/>
      <ProductDetails/>
      <DeliveryAddressForm/>
      <OrderSummary/>
      <Checkout/>
      <Cart/>
      <Footer/>
    
    </div>
    
  );
}

export default App;
