import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footerCO}>
      <div className={style.Fsec1}>
        <div className={style.MangCodig}>
          <img
            className={style.imageMangCodig}
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_2012_ktmn8j.png"
            alt="MangCodig"
          />
          <h2> SPORTZONE</h2>
        </div>
        <p className={style.paragraph}>
          ¡Bienvenidos a Sportzone! Aquí, tu pasión es nuestra inspiración.
          Somos tu fuente confiable de artículos deportivos de calidad que
          impulsarán tu rendimiento y te acompañarán en cada paso de tu viaje
          deportivo. Desde ropa técnica hasta accesorios especializados, nuestra
          tienda en línea ofrece lo mejor de las marcas más destacadas. Tu éxito
          comienza explorando nuestro catálogo. ¡Bienvenido a tu mundo de
          posibilidades deportivas en Sportzone!
        </p>
        <div className={style.Fsec1IMGS}>
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392853/PF/Group_86_otikyv.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_88_z3wrhi.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_87_gq5wvh.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_85_ktv4zp.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.Fsec2}>
        <h3>Paginas</h3>
        <ul className={`${style.list} ${style.clickable_list}`}>
          <Link to="/home">
            <li>Catalogo</li>
          </Link>
          <Link to="/register">
            <li>Registrarse</li>
          </Link>
          <Link to="/login">
            <li>Ingresar</li>
          </Link>
          <Link to="/about">
            <li>Acerca de</li>
          </Link>
        </ul>
      </div>
      <div className={style.Fsec3}>
        <h3>SERVICIOS</h3>
        <ul className={style.list}>
          <li>Mercadopago</li>
          <li>Cloudinary</li>
          <li>UI/UX</li>
          <li>Google/Facebook Auth</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
