 
 import React from 'react'
 import {useSelector} from 'react-redux';
 import CompraItem from '../../../../Components/CompraItem/CompraItem';
 import style from './MisCompras.module.css'
 
 const MisCompras = () => {
   const urlimg = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1691619583/PF/ghost2_zho9as.gif'
   const compras =  useSelector((state) => state.app.comprasUsuario);
  

  return (
    <div className={style.MisCompras}>
      <h1 className={style.ttl}>Mis Compras</h1>
      {compras.length >= 1 && 
        compras.map((compra, index) => (
        <div key={index} className={style.CompraContainer}>
          <CompraItem compra={compra} />
        </div>
      ))
      }
      {compras.length < 1 &&
        <div className={style.comprasVacias}>
            <h1 className={style.ttlvd}>Aqui no hay nada...</h1>
            <div className={style.container_imgvd}>
              <img className={style.imgvd} src={urlimg} alt="hpa" />
            </div>
            <h3 className={style.empc}>Empecemos a comprar..!</h3>
            <button className={style.btnvms}>VAMOS..!!</button>
        </div>
      }
    </div>
  );
 }
 
 export default MisCompras