import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { resetDisplayedProducts } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, handleLogout } from "../../helpers/helperLogin";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import styles from "./NavBar.module.css";
import cartIcon from "../../assets/shopping-cart.svg";

const NavBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const { role } = useSelector((state) => state.app.user);
  const cartLength = products?.length;

  const shouldRenderSearchBar =
    (location.pathname !== "/" && role === "Cliente") ||
    location.pathname === "/home";

  const handleResetProducts = () => {
    if (location.pathname !== "/home") dispatch(resetDisplayedProducts());
  };

  const urlImageUser =
    "https://res.cloudinary.com/dpjeltekx/image/upload/v1690818714/PF/WhatsApp_Image_2023-07-31_at_10.39.59_uatatn.jpg";

  return (
    <nav className={styles.nav}>
      {location.pathname === "/" ? (
        <Link to="/about">About us</Link>
      ) : (
        <Link
          to="/"
          className={styles.site_title}
          onClick={handleResetProducts}
        >
          SPORTZONE
        </Link>
      )}
      {role === "SuperUser" || role === "Admin" ? (
        <Link to={"/adminProducts"}>Panel admin</Link>
      ) : null}
      {shouldRenderSearchBar && <SearchBar />}
      <ul className={styles.nav_list}>
        <li>
          <Link to="/home" onClick={handleResetProducts}>
            Catalogo
          </Link>
        </li>
        {isLoggedIn() ? (
          <>
            {role === "Cliente" && (
              <div className={styles.clientIcons}>
                <li className={styles.favorites_item}>
                <Link to="/favorites">
                <FontAwesomeIcon icon={faHeart} className={styles.item}/>
                </Link>
              </li>

                <li className={styles.cart_item}>
                <Link to="/cart">
                  <img
                    src={cartIcon}
                    alt="Shopping Cart"
                    className={styles.cart_img}
                  />
                </Link>
                {cartLength > 0 && <span>{cartLength}</span>}
              </li>
              </div>
              
            )}
            <li
              className={styles.logout}
              onClick={() => handleLogout(navigate, dispatch)}
            >
              Salir
            </li>
            <li
              className={styles.userSettings}
              style={{ "--bgimage": `url('${urlImageUser}')` }}
              onClick={props.deployMenu}
            ></li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Ingresar</Link>
            </li>
            <li>
              <Link to="/register">REGISTRO</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
