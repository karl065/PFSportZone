/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, NavLink, Link } from "react-router-dom";
import { isLoggedIn, handleLogout } from "../../helpers/helperLogin";
import styles from "./Landing.module.css";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ChatBot } from "../../Components/";
const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.app.user);

  //* función para redirigir al home al momento de hacer click a "Tienda"
  const toHome = () => {
    navigate("/home");
  };
  //* función para redirigir al login al momento de hacer click a "Log In"
  const toLogIn = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.barraSuperior}>
        <NavLink to="/about">
          <p>Acerca de</p>
        </NavLink>
        {role === "SuperUser" || role === "Admin" ? (
          <Link to={"/adminProducts"}>Panel Admin</Link>
        ) : null}
        {isLoggedIn() ? (
          <li onClick={() => handleLogout(navigate, dispatch)}>Salir</li>
        ) : (
          <NavLink to="/register">
            <p>Registrarse</p>
          </NavLink>
        )}
        {/* <NavLink to="/faq">
          <p>F&A</p>
        </NavLink> */}
      </ul>
      <div className={styles.hero_box}>
        <h1>SPORTZONE</h1>
        <h3>Todo el deporte en un solo lugar...</h3>
        <div className={styles.buttons}>
          <button className={styles.tienda} onClick={toHome}>
            TIENDA
          </button>
          {!isLoggedIn() && <button onClick={toLogIn}>Ingresar</button>}
        </div>
      </div>

      <ChatBot />

      <img
        className={styles.image}
        src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689812951/PF/image1_xrg2b8.png"
        alt="imagen-landing"
      />

      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
