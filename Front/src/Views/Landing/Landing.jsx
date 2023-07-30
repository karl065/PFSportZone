/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, NavLink, Link } from "react-router-dom";
import { isLoggedIn, handleLogout } from "../../helpers/helperLogin";
import styles from "./Landing.module.css";
import Footer from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { deleteAllProduct } from "../../redux/actions/cartActions";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  if (status) dispatch(deleteAllProduct());
  //* función para redirigir al home al momento de hacer click a "Tienda"
  const toHome = () => {
    navigate("/home");
  };
  //* función para redirigir al login al momento de hacer click a "Log In"
  const toLogIn = () => {
    navigate("/login");
  };

  const role = localStorage.getItem("role");

  return (
    <div className={styles.container}>
      <ul className={styles.barraSuperior}>
        <NavLink to="/about">
          <p>About Us</p>
        </NavLink>
        {role === "SuperUser" || role === "Admin" ? (
          <Link to={"/adminProducts"}>Dashboard</Link>
        ) : null}
        {isLoggedIn() ? (
          <li onClick={() => handleLogout(navigate)}>Logout</li>
        ) : (
          <NavLink to="/register">
            <p>Sign Up</p>
          </NavLink>
        )}
        <NavLink to="/faq">
          <p>F&A</p>
        </NavLink>
      </ul>
      <div className={styles.titles}>
        <h1>SPORTZONE</h1>
        <h3>Todo el deporte en un solo lugar...</h3>
      </div>

      <div className={styles.buttons}>
        <button className={styles.tienda} onClick={toHome}>
          TIENDA
        </button>
        {!isLoggedIn() && <button onClick={toLogIn}>LOG IN</button>}
      </div>

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
