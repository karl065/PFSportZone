/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "./Components";
import {
  Landing,
  Home,
  Detail,
  Review,
  Faq,
  Error,
  About,
  UserRegister,
  AdminUsers,
  AdminProducts,
  AdminEmployes,
  AdminNewProduct,
  UserLogin,
  AdminNewUsers,
  AdminNewCategory,
  AdminNewMarca,
  AdminNewDeportes,
  AdminEditProd,
  AdminPagos,
  Cart,
} from "./Views";
import {
  access,
  getCategory,
  getInventory,
  getMarca,
  getSports,
  getUsers,
  setLoading,
} from "./redux/actions/actions";
import { getCart } from "./redux/actions/cartActions";
import { useState } from "react";

function App() {
  var { access } = useSelector((state) => state.app);
  const navigate = useNavigate();
  console.log(access);
  const dispatch = useDispatch();
  const location = useLocation();
  // * Estado para no mostrar la nav en la pagina 404
  const [errorPage, setErrorPage] = useState(true);
  const idCart = localStorage.getItem("idCarrito");
  const { pathname } = location;
  console.log(pathname);

  const blockedPath = [
    "/adminUsers",
    "/adminProducts",
    "/adminEmployes",
    "/adminNewProduct",
    "/adminNewMarca",
    "/adminNewDeportes",
    "/adminNewUser",
    "/adminNewCategory",
    "/adminEditProd",
    "/adminEditProd",
  ];

  // * Carga inicial de los datos necesarios para la app.
  useEffect(() => {
    blockedPath.includes(pathname) && !access && navigate("/login");

    dispatch(setLoading(true));
    Promise.all([
      dispatch(getUsers()),
      dispatch(getCategory()),
      dispatch(getSports()),
      dispatch(getMarca()),
      dispatch(getInventory()),
    ]).then(() => dispatch(setLoading(false)));
  }, [dispatch, access]);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getCart(idCart)).then(() => dispatch(setLoading(false)));
  }, [idCart, access]);

  return (
    <div className="App">
      {location.pathname !== "/" && errorPage && <NavBar />}
      <Routes>
        {true && <Route path="/" element={<Landing />} />}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminEmployes" element={<AdminEmployes />} />
        <Route path="/adminNewProduct" element={<AdminNewProduct />} />
        <Route path="/adminNewMarca" element={<AdminNewMarca />} />
        <Route path="/adminNewDeportes" element={<AdminNewDeportes />} />
        <Route path="/adminNewUser" element={<AdminNewUsers />} />
        <Route path="/adminNewCategory" element={<AdminNewCategory />} />
        <Route path="/adminEditProd" element={<AdminEditProd />} />
        <Route path="/adminPagos" element={<AdminPagos />} />
        {/* <Route path="/favorites"/> */}
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error setErrorPage={setErrorPage} />} />
      </Routes>
    </div>
  );
}

export default App;
