/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {initMercadoPago, Wallet} from '@mercadopago/sdk-react';
import {useState} from 'react';
import axios from 'axios';
import server from '../../Connections/Server';
// const {PUBLIC_KEY_MERCADO} = process.env;
// initMercadoPago(PUBLIC_KEY_MERCADO);
initMercadoPago('TEST-5df8431e-44ba-4d43-b16d-e329c65468c9');

const MercadoPago = (props) => {
  const [preferenceId, setPreferenceID] = useState(null);
  const crearPreferencia = async () => {
    try {
      const {Inventarios} = props;
      const {data} = await axios.post(`${server.api.baseURL}mercadopago`, {
        Inventarios,
      });
      return data.body.id;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleComprar = async () => {
    const id = await crearPreferencia();
    if (id) setPreferenceID(id);
  };
  return (
    <div>
      <button onClick={handleComprar}>Comprar</button>
      {preferenceId && <Wallet initialization={{preferenceId}} />}
    </div>
  );
};

export default MercadoPago;
