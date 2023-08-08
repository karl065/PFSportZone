/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import {addProduct, deleteProduct} from '../../../redux/actions/cartActions';
import styles from './CompraItem.module.css';
// import {LoadingSpinner} from '../../../Components/index';

const CompraItem = ({compra}) => {
  const navigate = useNavigate();
  const handleDetalle = () => {
    navigate(`/detalleCompra?id=${compra.id_sales}`);
  };
  return (
    <div className={styles.card} onClick={handleDetalle}>
      <div className={styles.filas}>
        <label>id de compra</label>
        <h1>{compra.id_sales}</h1>
      </div>
      <br />
      <div className={styles.filas}>
        <label>cantidad de productos</label>
        <h2>{compra.cantProd}</h2>
      </div>
      <br />
      <div className={styles.filas}>
        <label>total de la compra</label>
        <h2>{compra.total}</h2>
      </div>
      <br />
      <div className={styles.filas}>
        <label>estado de la compra</label>
        <h2>{compra.status}</h2>
      </div>
    </div>
  );
};

export default CompraItem;
