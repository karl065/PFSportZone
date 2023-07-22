import React, { useEffect } from 'react'
import style from './Error.module.css'
import { useNavigate } from 'react-router-dom';


const Error = (props) => {
  
  const navigate = useNavigate()

  useEffect(() => {
    props.setErrorPage(false)

    return () => {
      props.setErrorPage(true)
    };
  }, []);

  return (
    <main className={style.Errorcontainer}>
      <div className={style.Cimages}>
          <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/Rocket_gvuj3a.png" className={style.Rocket} />
          <div className={style.planetContainer}>
            <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/planet_brnqfv.png" className={style.planet} />
          </div>
            <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/spaceman_t14km3.png" className={style.spaceman} />
      </div>
      <div className={style.TBcontainer}>
        <h1>Ups..!</h1>
        <p>Page not found</p>
        <div className={style.btns}>
          <button className={style.btnError} onClick={()=>{navigate('/home')}}>Go Home</button>
          <button className={style.btnError} onClick={()=>{window.history.back()}}>Go Back</button>
        </div>
      </div>
    </main>
  )
}

export default Error;