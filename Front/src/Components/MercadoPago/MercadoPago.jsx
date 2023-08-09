/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {initMercadoPago, Wallet} from '@mercadopago/sdk-react';
import {useState} from 'react';
import axios from 'axios';
import server from '../../Connections/Server';
import styles from './MercadoPago.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
// const {PUBLIC_KEY_MERCADO} = process.env;
// initMercadoPago(PUBLIC_KEY_MERCADO);
initMercadoPago('TEST-5df8431e-44ba-4d43-b16d-e329c65468c9');

const MercadoPago = (props) => {
  const [preferenceId, setPreferenceID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const crearPreferencia = async () => {
    try {
      const {Inventarios, cartId} = props;
      const {data} = await axios.post(`${server.api.baseURL}mercadopago`, {
        Inventarios,
        cartId,
      });
      return data.body.id;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleComprar = async () => {
    setIsLoading(true);
    const id = await crearPreferencia();
    setIsLoading(false);
    if (id) setPreferenceID(id);
  };

  return (
    <div id="wallet_container" className={styles.container}>
      {isLoading && <LoadingSpinner />}
      {!preferenceId ? (
        <button className={styles.btnCheckout} onClick={handleComprar}>
          {isLoading ? '  ' : 'Pagar'}
        </button>
      ) : (
        <Wallet initialization={{preferenceId, redirectMode: 'self'}} />
      )}
    </div>
  );
};

export default MercadoPago;
