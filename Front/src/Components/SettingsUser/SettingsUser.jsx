import React from 'react'
import style from './SettingsUser.module.css'
import { useNavigate } from 'react-router-dom'
const SettingsUser = (props) => {

  const urlimage = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1690818714/PF/WhatsApp_Image_2023-07-31_at_10.39.59_uatatn.jpg'
  const navigate = useNavigate()

  return (
    <div className={style[`SettingsUser${props.bool}`]}>
        <button className={style.closeBtn} onClick={props.deployMenu}>✕</button>
        <hr />
        <h1 style={{textAlign:'center'}}>Settings</h1>
          <img className={style.imageuser} src={urlimage} alt="UserImage" />
        <hr />
        <button className={style.elementSettings} onClick={()=>{navigate('/login/resetpass')}} >Actualizar contraseña</button>
        <hr />
    </div>
  )
}

export default SettingsUser