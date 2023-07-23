/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {useEffect} from 'react';
import style from './Error.module.css';
import {Link} from 'react-router-dom';

const Error = (props) => {
  useEffect(() => {
    props.setErrorPage(false);

    return () => {
      props.setErrorPage(true);
    };
  }, []);

  return (
    <main className={style.Errorcontainer}>
      <div className={style.Cimages}>
        <img
          src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/Rocket_gvuj3a.png"
          className={style.Rocket}
        />
        <div className={style.planetContainer}>
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/planet_brnqfv.png"
            className={style.planet}
          />
        </div>
        <img
          src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689947525/PF/spaceman_t14km3.png"
          className={style.spaceman}
        />
      </div>
      <div className={style.TBcontainer}>
        <h1>Ups..!</h1>
        <p>Page not found</p>
        <div className={style.btns}>
          <Link className={style.btnError} to={'/home'}>
            Go Home
          </Link>
          <Link to={'/'} className={style.btnError}>
            Go Back
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
