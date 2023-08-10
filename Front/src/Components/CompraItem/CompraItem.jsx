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
    <div className={styles.CompraItem} onClick={handleDetalle}>
      <img className={styles.imgss} src="https://res.cloudinary.com/dpjeltekx/image/upload/v1691619583/PF/carrito_mqvg1p.png" />
      <div className={styles.Cid}>
        <label>compra:</label>
        <h1>{compra.id_sales}</h1>
      </div>
      <div className={styles.Cid}>
        <label>cantidad de productos</label>
        <h2 style={{textAlign:'center'}}>{compra.cantProd}</h2>
      </div>
        <span className={styles.total}>Total: ${compra.total}</span>
        <span className={styles.status}>{compra.status}<span className={styles.indicacor}>●</span></span>    
    </div>
  );
};

export default CompraItem;
