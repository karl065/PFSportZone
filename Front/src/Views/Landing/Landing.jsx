import React from 'react'
import styles from './Landing.module.css';
import {NavLink, useNavigate} from 'react-router-dom';

const Landing = () => {
const navigate = useNavigate();

//* funcion para redirigir al home al momento de hacer click a "Tienda"
const toHome = () => {
  navigate("/home");
};
//* funcion para redirigir al login al momento de hacer click a "Log In"
const toLogIn = () => {
  navigate("/login");
};

  return (
    <div className={styles.container}>

      <div className={styles.barraSuperior}>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/signup">SIGN UP</NavLink>
      <NavLink to="/faq">F&A</NavLink>
      </div>

      <div className={styles.titles}>
      <h1>SPORTZONE</h1>
      <h3>Todo el deporte en un solo lugar...</h3>
      </div>

      <div className={styles.buttons}>
      <button className={styles.tienda}onClick={toHome}>TIENDA</button>
      <button onClick={toLogIn}>LOG IN</button>
      </div>

      <img className={styles.image} src="src\assets\image1.png" alt="imagen-landing" />

      <footer>Aca va</footer>
    </div>
  )
}

export default Landing;