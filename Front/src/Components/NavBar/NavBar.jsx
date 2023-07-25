import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../index";
import styles from "./NavBar.module.css";
import { resetDisplayedProducts } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../assets/shopping-cart.svg";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartLength =  useSelector(state => state.cart.products.length);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const shouldRenderSearchBar =
    (location.pathname !== "/" && role === "Cliente") ||
    location.pathname === "/home";

  // * La función `logout` elimina el elemento 'token' del localStorage.
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

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
        {token ? (
          <>
            <li className={styles.cart_item}>
              <Link to="/cart">
                <img
                  src={cartIcon}
                  alt="Shopping Cart"
                  className={styles.cart_img}
                />
              </Link>
              {cartLength && <span>{cartLength}</span>}
            </li>
            <li className={styles.logout}>
              <Link onClick={logout} to={"/"}>
                Logout
              </Link>
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
