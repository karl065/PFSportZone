/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigate, NavLink, Link} from 'react-router-dom';
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

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <div className={styles.container}>
      <div className={styles.barraSuperior}>
        <NavLink to="/about">
          <p>About Us</p>
        </NavLink>
        {role === 'SuperUser' || role === 'Admin' ? (
          <Link to={'/adminProducts'}>Dashboard</Link>
        ) : null}
        {token ? (
          // <li>
          <Link onClick={logout} to={'/'}>
            Logout
          </Link>
        ) : (
          // </li>
          <NavLink to="/register">
            <p>Sign Up</p>
          </NavLink>
        )}
        <NavLink to="/faq">
          <p>F&A</p>
        </NavLink>
      </div>
      <div className={styles.titles}>
        <h1>SPORTZONE</h1>
        <h3>Todo el deporte en un solo lugar...</h3>
      </div>

      <div className={styles.buttons}>
        <button className={styles.tienda} onClick={toHome}>
          TIENDA
        </button>
        {token ? null : <button onClick={toLogIn}>LOG IN</button>}
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
