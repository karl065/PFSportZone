import styles from './Cart.module.css';
import {useSelector} from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem/CartItem';
import MercadoPago from '../../Components/MercadoPago/MercadoPago';
import {LoadingSpinner} from '../../Components';
import {isLoggedIn} from '../../helpers/helperLogin';
import LocalCart from './LocalCart/LocalCart';
import {Link, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Modal from './ModalPendiente';

const Cart = () => {
  const localCart = useSelector((state) => state.cart.localCart);
  const userProducts = useSelector((state) => state.cart.products);
  const totalCart = useSelector((state) => state.cart.total);
  const cartId = useSelector((state) => state.cart.id);
  const isLoading = useSelector((state) => state.app.isLoading);
  let cartLength = isLoggedIn() ? userProducts?.length : localCart.length;
  const location = useLocation();

  const [ticket, setTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Obtener el ticket de la URL usando propiedades de búsqueda
    const fullUrl = location.pathname + location.search;
    const searchParams = new URLSearchParams(fullUrl);
    const ticketParam = searchParams.get('urlticket');
    console.log(ticketParam);
    if (ticketParam) {
      setTicket(ticketParam);
      setIsModalOpen(true);
      // Aquí puedes abrir el modal con la URL que contiene el ticket
      // Lógica para abrir el modal aquí
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setTicket('');
  };
  return (
    <section
      className={`${styles.cart_wrapper} ${!cartLength && styles.empty} ${
        isLoading ? styles.loading_container : ''
      }`}
    >
      {isLoggedIn() && !cartId ? (
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
                    {isLoggedIn() ? userProducts.length : localCart.length}
                  </span>
                </h1>
                {isLoggedIn() ? (
                  <div>
                    {userProducts.map((product) => (
                      <div key={product.id_inventory}>
                        <CartItem product={product} cartId={cartId} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <LocalCart />
                )}
              </div>
              <div className={styles.checkout_container}>
                {isLoggedIn() ? (
                  <>
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
                  </>
                ) : (
                  <Link to="/login" className={styles.btnCartLogin}>
                    Ingresa para comprar
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} ticket={ticket} />
    </section>
  );
};

export default Cart;
