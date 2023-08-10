/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import {useLocation, useNavigate} from 'react-router-dom';
import styles from './DetalleCompra.module.css';
import axios from 'axios';
import server from '../../../Connections/Server';
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';

const DetalleCompra = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const status = params.get('status');
  const [ventas, setVentas] = useState([]);
  const [statusVentas, setStatusVentas] = useState('');
  let [infojs, setInfojs] = useState({})

  const compraExitosa = () => {
    Swal.fire('Buen trabajo!', `Compra Exitosa`, 'success');
  };

  const obtenerCompra = async () => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}ventas/${id}`);
      setVentas(data.Inventarios);
      setStatusVentas(data.status);
      setInfojs(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handlerRedirectReview = (id) => {
    navigate(`/review/${id}`);
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
    <div className={styles.DetalleCompra}>
      <h1>Detalles de compras</h1>
      <section className={styles.container}>
        <div className={styles.Sec1}>
          <div className={styles.infoContainer}>   
          <h1 style={{textAlign:'center'}}>SportZone</h1>   
          <h6 style={{textAlign:'center', opacity:0.35}}> detalles compra {id}</h6>      
          <p style={{textAlign:'end', opacity:0.4}}><span>{infojs.createdAt?.slice(0, 10)}</span></p>
          <br />
          <h3 className={styles.tll}><hr />Productos<hr /></h3>
          <br />
          {
            infojs.Inventarios?.map((articulo, index) => {
              return (
                  <div>
                    <div className={styles.cpa} key={articulo.article_name}>
                      <div className={styles.cpaspn}>
                        <span style={{opacity:0.6}}>Identificador de articulo {articulo.id_inventory}</span> 
                        <span><b>{articulo.article_name}</b></span> 
                      </div>
                      <span style={{marginLeft:'1rem', fontWeight:'600'}}>${(articulo.VentasInventarios.cant * articulo.VentasInventarios.precioPorUnd).toLocaleString()}</span>
                    </div>
                    {
                    articulo.VentasInventarios?.cant > 1 &&
                      <p key={articulo.article_name+'1'}>unidad: {articulo.VentasInventarios.precioPorUnd}</p>
                    }
                    <hr />
                  </div>
              )
            })
          }
          <p style={{textAlign:'end'}}>total de compra:    $<b>{(infojs.total)?.toLocaleString()}</b></p>
          <hr />
          <p>Numero de articulos {infojs.cantProd}</p>
          {
            console.log(infojs)
          }
          </div>
        </div>
        <div className={styles.Sec2}>
            {ventas.map((prod, index) => {
            
             return (
              <div className={styles.containerIMG} key={index}>
                <h1 className={styles.ttllimg}>{prod.article_name}</h1>
                <img className={styles.imgpr} src={prod.image[0]} alt={prod.article_name} />
                <h3>{prod.VentasInventarios.cant} {prod.VentasInventarios.cant >= 2 ? 'piezas' : 'pieza' }</h3>
              </div>
            )
            }
            )}
        </div>
      </section>
    </div>
  );
};

export default DetalleCompra;
