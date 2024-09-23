import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Results1 from './Pages/Results1/Results1';
const stripePromise = loadStripe(
  "pk_test_51Q0jfVP8pytKpTTzDg7Uv5xCiGMhDbPHewLUQLm1zylBGlgLv6dd3IyifP2ZWxb2H9T0xRwnnnlPF8rk56kMFqi600UrEo472U"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Elements stripe={stripePromise}>
                <Orders />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        {/* <Route path="/category2/:categoryName" element={<Results1 />} /> */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing