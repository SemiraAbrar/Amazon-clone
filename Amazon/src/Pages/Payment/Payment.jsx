import React, { useContext,useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import classes from "./Payment.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
function Payment() {
  const [{ basket, user }] = useContext(DataContext);
    const totalPrice = basket.reduce(
      (amount, item) => item.price * item.amount + amount,
      0
    );
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError,setCardError]=useState(null);
  const handleChange=(e)=>{
    console.log(e);
    e?.error?.message?setCardError(e?.error?.message):setCardError("")
  };
  return (
    <Layout>
      <div className={classes.payment__header}>Checkout({totalItem}) items</div>
      <section className={classes.Payment}>
        {/* adress */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>woreda 10</div>
            <div>Addis Ababa,Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
