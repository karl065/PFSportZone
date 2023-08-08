/* eslint-disable react/prop-types */
import style from './SettingsUser.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {handleLogout} from '../../helpers/helperLogin';



const SettingsUser = (props) => {
  

  const urlimage =
    'https://res.cloudinary.com/dpjeltekx/image/upload/v1690818714/PF/WhatsApp_Image_2023-07-31_at_10.39.59_uatatn.jpg';
  const navigate = useNavigate();

  return (
    <aside className={style[`SettingsUser${props.bool}`]}>
      <button className={`${style.elementSettings} ${style.elementLogout}`} onClick={() => {handleLogout(navigate()); props.deployMenu();}}> Cerrar sesion</button>
      <button className={style.closeBtn} onClick={props.deployMenu}>
        ✕
      </button>
      <hr />
      <h1 style={{textAlign: 'center'}}>Settings</h1>
      <img className={style.imageuser} src={urlimage} alt="UserImage" />
      <h3 className={style.userName}>user</h3>
      <p className={style.account}><Link to={'/Account/client'}><span onClick={() => {props.deployMenu();}}>Mi cuenta →</span></Link></p>
    </aside>
  );
};

export default SettingsUser;
