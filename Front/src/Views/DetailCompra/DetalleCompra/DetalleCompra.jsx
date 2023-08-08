/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import {useLocation} from 'react-router-dom';
import styles from './DetalleCompra.module.css';
import axios from 'axios';
import server from '../../../Connections/Server';
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';

const DetalleCompra = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const status = params.get('status');
  const [ventas, setVentas] = useState([]);
  const [statusVentas, setStatusVentas] = useState('');

  const compraExitosa = () => {
    Swal.fire('Buen trabajo!', `Compra Exitosa`, 'success');
  };

  const obtenerCompra = async () => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}ventas/${id}`);
      setVentas(data.Inventarios);
      setStatusVentas(data.status);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (status) {
      compraExitosa();
    }
  }, [status]);

  useEffect(() => {
    obtenerCompra();
  }, [id]);
  return (
    <div className={styles.container}>
      <h1>detalle compra</h1>
      {ventas.map((prod, index) => (
        <div key={index}>
          <h1>{prod.id_inventory}</h1>
          <img src={prod.image[0]} width={300} alt={prod.article_name} />
          <div>
            <h1>{prod.article_name}</h1>
          </div>
          <div>
            <div className={styles.filas}>
              <label>Cantidad:</label>
              <h3>{prod.VentasInventarios.cant}</h3>
            </div>
            <div className={styles.filas}>
              <label>Precio:</label>
              <h3>{prod.selling_price}</h3>
            </div>
            <div className={styles.filas}>
              <label>Total:</label>
              <h3>{prod.VentasInventarios.precioPorCant}</h3>
            </div>
            <div className={styles.filas}>
              <label>Estado:</label>
              <h3>{statusVentas}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetalleCompra;
