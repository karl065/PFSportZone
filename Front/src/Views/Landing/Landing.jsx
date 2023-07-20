/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigate} from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  //* función para redirigir al home al momento de hacer click a "Tienda"
  const toHome = () => {
    navigate('/home');
  };
  //* función para redirigir al login al momento de hacer click a "Log In"
  const toLogIn = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h1>SPORTZONE</h1>
        <h3>Todo el deporte en un solo lugar...</h3>
      </div>

      <div className={styles.buttons}>
        <button className={styles.tienda} onClick={toHome}>
          TIENDA
        </button>
        <button onClick={toLogIn}>LOG IN</button>
      </div>

      <img
        className={styles.image}
        src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689812951/PF/image1_xrg2b8.png"
        alt="imagen-landing"
      />

      <footer>Aca va</footer>
    </div>
  );
};

export default Landing;
