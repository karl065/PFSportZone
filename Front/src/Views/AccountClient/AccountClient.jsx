/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Direcciones from './Views/Direcciones/Direcciones';
import Favorites from '../../Views/favorites/Favorites';
import Formasdepago from './Views/Formas de pago/Formas de pago';
import MisCompras from './Views/MisCompras/MisCompras';
import NuevaDireccion from './Views/NuevaDireccion/NuevaDireccion'
import EditInfo from './Views/EditInfo/EditInfo';
import ResetPass from './Views/ResetPass/ResetPass';
import {Link, useNavigate} from 'react-router-dom';
import style from './AccountClient.module.css'


const AccountClient = (props) => {

    const navigate = useNavigate()
    const idUser = localStorage.getItem('idUser');

    useEffect(() => {
        props.setErrorPage(false);
        return () => {
          props.setErrorPage(true);
        };
      }, []);
    
    const [classE, setClassE] = useState('') 
    const [view, setView] = useState(<p>hola</p>)
    const [deployDetails, SetDeployDetails] = useState(false)

    const hiddenDetails = () => {
      setClassE('Hidden')
      setTimeout(()=>{
        SetDeployDetails(false)
        setClassE('')
        setView(<p>hola</p>)
      },500)
    }

    //requerido de redux
    const BgColorUser = 'Greenyellow'
    const userName = 'Anon'
    const userImage = undefined
    //https://res.cloudinary.com/dpjeltekx/image/upload/v1690999922/PF/noOrder_tbe9y4.svg


    const urlImageCompras = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1691095513/PF/icons8-zapatillas-96_pltlif.png'
    const urlImageDirecciones = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1691095513/PF/icons8-mapa-96_xjg1rf.png'
    const urlImagePago = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1691095513/PF/icons8-mastercard-96_bdwxs0.png'
    const urlImageAyuda = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1691095513/PF/icons8-asistente-96_islsbl.png'

  return (
    <main className={style.AccountClient} >
        <header className={style.ACHeader} ><p>Sports</p><span>-</span><p>Zone</p></header>
        <nav className={style.ACNav} ></nav>
        <section className={style.ACBodyContainer} >
            <div className={style.ACBody}>
              {
                deployDetails &&
                <div className={style[`divDetails${classE}`]}>
                  <button className={style.backbtn2} onClick={hiddenDetails}>↩Volver</button>
                  <div className={style.detailsContainer}>
                    {
                      view
                    }
                  </div>
                </div>
              }
              <button className={style.backbtn}><Link to={'/home'}>↩</Link></button>
              <h2>Mi cuenta</h2>
                <div className={style.imageUser} style={{'--BgColorUser': `${BgColorUser}`}}><p className={style.userIconText}>{userName[0]}</p></div>
                <hr />
                <section className={style.containerEc}>
                  <button onClick={()=>{setView((<MisCompras />)); SetDeployDetails(!deployDetails)}} className={style.elementAcc} style={{'--bgimage': `url('${urlImageCompras}')`, '--BgColor': 'rgba(114, 174, 226, 0.659)'}} ><p className={style.eleText}>Mis compras</p></button>
                  <button onClick={()=>{setView(<Direcciones/>); SetDeployDetails(!deployDetails)}} className={style.elementAcc} style={{'--bgimage': `url('${urlImageDirecciones}')`, '--BgColor': 'rgba(225, 220, 133, 1)'}} ><p className={style.eleText}>direcciones</p></button>
                  <button onClick={()=>{setView(<Favorites/>); SetDeployDetails(!deployDetails)}} className={style.elementAcc} style={{'--bgimage': `url('${urlImagePago}')`, '--BgColor': 'rgb(252, 131, 118)'}} ><p className={style.eleText}>Favoritos</p></button>
                <hr style={{width:'100%'}} />
                  <button onClick={()=>{setView((<ResetPass />)); SetDeployDetails(!deployDetails)}} className={style.elementAcc} style={{'--bgimage': `url('${urlImagePago}')`, '--BgColor': '#78CFDA'}} ><p className={style.eleText}>Actualizar contraseña</p></button>
                  <button onClick={()=>{setView((<EditInfo />)); SetDeployDetails(!deployDetails)}} className={style.elementAcc} style={{'--bgimage': `url('${urlImagePago}')`, '--BgColor': 'rgb(103, 111, 111)'}} ><p className={style.eleText}>Editar datos</p></button>
                </section>
            </div>
        </section>
    </main>
  )
}

export default AccountClient