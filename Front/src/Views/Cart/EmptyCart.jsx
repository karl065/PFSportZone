import styles from './EmptyCart.module.css';
import {Link} from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <div className={`${styles.empty} ${styles.empty_info}`}>
        <h2>¡Empieza un carrito de compras!</h2>
        <h3>Agrega muchos productos y consigue un envío gratis. 😁</h3>
        <Link to="/home" className={styles.btnDiscover}>
          Descubrir productos
        </Link>
      </div>
      <div className={`${styles.empty} ${styles.empty_checkout}`}>
        <h2>Resumen de compra</h2>
        <h3>Aquí verás los importes de tu compra una vez que agregues productos.</h3>
      </div>
    </>
  );
};

export default EmptyCart;
