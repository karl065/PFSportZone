import styles from './Cart.module.css';
import {useSelector} from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem/CartItem';
import MercadoPago from '../../Components/MercadoPago/MercadoPago';
import {LoadingSpinner} from '../../Components';

const Cart = () => {
  const userProducts = useSelector((state) => state.cart.products);
  const totalCart = useSelector((state) => state.cart.total);
  const cartId = useSelector((state) => state.cart.id);
  let cartLength = userProducts?.length;
  return (
    <section
      className={`${styles.cart_wrapper} ${!cartLength && styles.empty} ${
        !cartId ? styles.loading_container : ''
      }`}
    >
      {!cartId ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.cart_section}>
          {!cartLength ? (
            <EmptyCart />
          ) : (
            <>
              <div className={styles.cart_info}>
                <h1>
                  CARRITO DE COMPRAS
                  <span className={styles.span_products}>
                    {userProducts.length}
                  </span>
                </h1>
                {userProducts.map((product) => (
                  <div key={product.id_inventory}>
                    <CartItem product={product} cartId={cartId} />
                  </div>
                ))}
              </div>
              <div className={styles.checkout_container}>
                <h3>RESUMEN DEL PEDIDO</h3>
                <div className={styles.checkout_box}>
                  <h4>Subtotal</h4>
                  <p className={styles.p}>${totalCart}</p>
                </div>
                <div className={styles.checkout_box}>
                  <h4>Envió</h4>
                  <p className={styles.p}>$0</p>
                </div>
                <div className={`${styles.checkout_box} ${styles.total}`}>
                  <h2>Total</h2>
                  <p>${totalCart}</p>
                </div>
                <MercadoPago Inventarios={userProducts} cartId={cartId} />
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Cart;
