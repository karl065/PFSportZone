import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { resetDisplayedProducts } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, handleLogout } from "../../helpers/helperLogin";
import styles from "./NavBar.module.css";
import cartIcon from "../../assets/shopping-cart.svg";


const NavBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const cartLength = products?.length;
  const role = localStorage.getItem("role");

  const shouldRenderSearchBar =
    (location.pathname !== "/" && role === "Cliente") ||
    location.pathname === "/home";

    const urlImageUser = 'https://res.cloudinary.com/dpjeltekx/image/upload/v1690818714/PF/WhatsApp_Image_2023-07-31_at_10.39.59_uatatn.jpg'

  return (
    <nav className={styles.nav}>
      {location.pathname === "/" ? (
        <Link to="/about">About us</Link>
      ) : (
        <Link to="/" className={styles.site_title}>
          SPORTZONE
        </Link>
      )}
      {role === "SuperUser" || role === "Admin" ? (
        <Link to={"/adminProducts"}>Dashboard</Link>
      ) : null}
      {shouldRenderSearchBar && <SearchBar />}
      <ul className={styles.nav_list}>
        <li>
          <Link to="/home" onClick={() => dispatch(resetDisplayedProducts())}>
            Catalog
          </Link>
        </li>
        {isLoggedIn() ? (
          <>
            {role === "Cliente" && (
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
            )}
            <li
              className={styles.logout}
              onClick={() => handleLogout(navigate)}
            >
              Logout
            </li>
            <li className={styles.userSettings} style={{'--bgimage': `url('${urlImageUser}')`}} onClick={props.deployMenu} >
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
