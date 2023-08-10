import styles from './Compra.module.css';
import {useSelector} from 'react-redux';
import CompraItem from './CompraItem/CompraItem';

const Compra = () => {
  const compras =  [{
                     id_sales:'23fx5d',
                     cantProd:'4',
                     total:'345',
                     status:'estado'
                    }, {}]  /* useSelector((state) => state.app.comprasUsuario); */
  return (
    <div className={styles.filas}>
      {compras.map((compra, index) => (
        <div key={index} className={styles.columnas}>
          <CompraItem compra={compra} />
        </div>
      ))}
      <h1>Compras</h1>
    </div>
  );
};

export default Compra;
