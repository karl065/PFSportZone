import styles from './Cart.module.css';
import {useSelector} from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem/CartItem';
import MercadoPago from '../../Components/MercadoPago/MercadoPago';

const Cart = () => {
  const userProducts = useSelector((state) => state.cart.products);
  const cartId = useSelector((state) => state.cart.id);
  let cartLength;
  if (userProducts) {
    cartLength = userProducts.length;
  }

  console.log(userProducts);

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
                CARRITO DE COMPRAS{' '}
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
              <h3>Facturacion</h3>
              <div className={styles.checkout_box}>
                <h4>Subtotal</h4>
                <p>$2014.54</p>
              </div>
              <div className={styles.checkout_box}>
                <h4>Shipping</h4>
                <p>$0</p>
              </div>
              <div className={styles.checkout_box}>
                <h4>Total</h4>
                <p>$2104.54</p>
              </div>
              <MercadoPago Inventarios={userProducts} />
              <button className={styles.btnCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
