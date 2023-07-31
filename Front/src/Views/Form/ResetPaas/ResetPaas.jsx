import React, { useEffect, useState } from 'react'
import style from './ResetPaas.module.css'
import { useNavigate } from 'react-router-dom';

const ResetPaas = (props) => {

    useEffect(() => {
        props.setErrorPage(false);
    
        return () => {
          props.setErrorPage(true);
        };
      }, []);

      const navigate = useNavigate()

      const [pass, setPass] = useState('')
      const [confirmacion, setConfirmacion] = useState('')
    
      const SubmitFunction = (event) => {


      }

  return (
    <div className={style.ResetPaas}>
      <header className={style.header}>
        <p className={style.headerText}>SportZone</p>
      </header>
      <section className={style.bodycontainer}>
        <div className={style.buttns}>
          <button onClick={() => { navigate('/home') }}>Home</button>
          <button onClick={() => { window.history.back() }}>Volver</button>
        </div>
        <form className={style.form} onSubmit={SubmitFunction}>
          <h2 style={{textAlign:'center'}}>Actualiza tu contraseña</h2>
          <div>
            <img className={style.imageForm} src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690818126/PF/sports-activity-7162545-5818789_opmt5e.png" alt="" />
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <label htmlFor="Password">Contraseña</label>
            <input
              id="Password"
              type="text"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <label htmlFor="Confirmation">Confirmacion</label>
            <input
              id="Confirmation"
              type="text"
              onChange={(e) => setConfirmacion(e.target.value)}
              value={confirmacion}
            />
          </div>
          <button type='submit' className={style.sbmBtn}>Actualizar</button>
        </form>
      </section>
    </div>
  )
}

export default ResetPaas