import React from "react";
import styles from "./EmptyCart.module.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className={`${styles.empty} ${styles.empty_info}`}>
        <h2>Start shopping!</h2>
        <h3>Add a lot of products and get free shipping 😁</h3>
        <Link to="/home" className={styles.btnDiscover}>Discover products</Link>
      </div>
      <div className={`${styles.empty} ${styles.empty_checkout}`}>
        <h2>Checkout</h2>
        <h3>Here you will see the amounts of your purchase</h3>
      </div>
    </>
  );
};

export default EmptyCart;
