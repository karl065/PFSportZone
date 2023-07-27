import styles from './Cart.module.css';
import {useSelector} from 'react-redux';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const userProducts = useSelector((state) => state.cart.products);
  const cartLength = useSelector((state) => state.cart.products.length);

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
                <div className={styles.product_container} key={index}>
                  {product.image && (
                    <img src={product?.image[0]} alt={product.article_name} />
                  )}
                  <h3>{product.article_name}</h3>
                  <p>{product.stock}</p>
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
              <button className={styles.btnCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
