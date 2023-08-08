/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useState} from 'react';
import style from './ResetPass.module.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import server from '../../../../Connections/Server';
import Swal from 'sweetalert2';

const ResetPaas = (props) => {
  const idUser = localStorage.getItem('idUser');
  

  const navigate = useNavigate();

  const [pass, setPass] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const SubmitFunction = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${server.api.baseURL}users/${idUser}`, {password: pass});
      Swal.fire(
        'Buen trabajo!',
        'Contraseña actualizada correctamente!',
        'success'
      );
      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando la contraseña. Intente nuevamente.',
      });
    }
  };

  return (
    <div className={style.ResetPaas}>
      <section className={style.bodycontainer}>
        <form className={style.form} onSubmit={SubmitFunction}>
          <h2 style={{textAlign: 'center'}}>Actualiza tu contraseña</h2>
          <div style={{display:'grid'}}>
            <img
              style={{margin:'auto'}}
              className={style.imageForm}
              src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690818126/PF/sports-activity-7162545-5818789_opmt5e.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <label htmlFor="Password">Contraseña nueva</label>
            <input
              id="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <label htmlFor="Confirmation">Confirmar la contraseña</label>
            <input
              id="Confirmation"
              type="password"
              onChange={(e) => setConfirmacion(e.target.value)}
              value={confirmacion}
            />
          </div>
          <div style={{display:'grid', paddingTop:'2rem'}}>
            <button type="submit" className={style.sbmBtn}>Actualizar</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ResetPaas;
