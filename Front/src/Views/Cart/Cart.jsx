import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem/CartItem";
import MercadoPago from "../../Components/MercadoPago/MercadoPago";

const Cart = () => {
  const userProducts = useSelector((state) => state.cart.products);
  const totalCart = useSelector((state) => state.cart.total);
  const cartId = useSelector((state) => state.cart.id);
  let cartLength = userProducts?.length;

  return (
    <section
      className={`${styles.cart_wrapper} ${!cartLength && styles.empty}`}
    >
      <div className={styles.cart_section}>
        {!cartLength ? (
          <EmptyCart />
        ) : (
          <>
            <div className={styles.cart_info}>
              <h1>
                SHOPPING CART
                <span className={styles.span_products}>
                  {userProducts.length}
                </span>
              </h1>
              {userProducts.map((product, index) => (
                <div key={index}>
                  <CartItem product={product} cartId={cartId} />
                </div>
              ))}
            </div>
            <div className={styles.checkout_container}>
              <h3>ORDER SUMMARY</h3>
              <div className={styles.checkout_box}>
                <h4>Subtotal</h4>
                <p className={styles.p}>${totalCart}</p>
              </div>
              <div className={styles.checkout_box}>
                <h4>Shipping</h4>
                <p className={styles.p}>$0</p>
              </div>
              <div className={`${styles.checkout_box} ${styles.total}`}>
                <h2>Total</h2>
                <p>${totalCart}</p>
              </div>
              <MercadoPago Inventarios={userProducts} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
