import styles from './Compra.module.css';
import {useSelector} from 'react-redux';
// import MercadoPago from '../../Components/MercadoPago/MercadoPago';
// import {LoadingSpinner} from '../../Components';
import CompraItem from './CompraItem/CompraItem';
// import CompraVacia from './CompraVacia/CompraVacia';

const Compra = () => {
  const compras = useSelector((state) => state.app.comprasUsuario);
  // const totalCart = useSelector((state) => state.cart.total);
  // const cartId = useSelector((state) => state.cart.id);
  // let cartLength = userProducts?.length;
  console.log(compras);
  return (
    <div className={styles.filas}>
      {compras.map((compra, index) => (
        <div key={index} className={styles.columnas}>
          <CompraItem compra={compra} />
        </div>
      ))}
      <h1>Compras</h1>
    </div>
    // <section
    //   className={`${styles.cart_wrapper} ${!cartLength && styles.empty} ${
    //     !cartId ? styles.loading_container : ''
    //   }`}
    // >
    //   {!cartId ? (
    //     <LoadingSpinner />
    //   ) : (
    //     <div className={styles.cart_section}>
    //       {!cartLength ? (
    //         <CompraVacia />
    //       ) : (
    //         <>
    //           <div className={styles.cart_info}>
    //             <h1>
    //               Detalle DE COMPRAS
    //               <span className={styles.span_products}>
    //                 {userProducts.length}
    //               </span>
    //             </h1>
    //             {userProducts.map((product) => (
    //               <div key={product.id_inventory}>
    //                 <CompraItem product={product} cartId={cartId} />
    //               </div>
    //             ))}
    //           </div>
    //           <div className={styles.checkout_container}>
    //             <h3>RESUMEN DEL PEDIDO</h3>
    //             <div className={styles.checkout_box}>
    //               <h4>Subtotal</h4>
    //               <p className={styles.p}>${totalCart}</p>
    //             </div>
    //             <div className={styles.checkout_box}>
    //               <h4>Envió</h4>
    //               <p className={styles.p}>$0</p>
    //             </div>
    //             <div className={`${styles.checkout_box} ${styles.total}`}>
    //               <h2>Total</h2>
    //               <p>${totalCart}</p>
    //             </div>
    //             <MercadoPago Inventarios={userProducts} cartId={cartId} />
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   )}
    // </section>
  );
};

export default Compra;
