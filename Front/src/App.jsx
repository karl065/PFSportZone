/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner, NavBar } from "./Components";
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
  AdminEditProduct,
  AdminQuestions,
  AdminPagos,
  Cart,
  ResetPaas,
} from "./Views";
import {
  getCategory,
  getInventory,
  getMarca,
  getSports,
  getUser,
  getUsers,
  setLoading,
} from "./redux/actions/actions";
import { getLocalCart } from "./redux/actions/cartActions";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import SettingsUser from "./Components/SettingsUser/SettingsUser";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // * Estado para no mostrar la nav en la pagina 404
  const [errorPage, setErrorPage] = useState(true);
  // * Estado para el despligue del menu de usuario
  let [deployMenu, setDeployMenu] = useState(false);
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    if (token) dispatch(getUser(navigate));
  }, [token]);

  // * Carga inicial de los datos necesarios para la app.
  useEffect(() => {
    dispatch(setLoading(true));
    Promise.all([
      dispatch(getLocalCart()),
      dispatch(getUsers()),
      dispatch(getCategory()),
      dispatch(getSports()),
      dispatch(getMarca()),
      dispatch(getInventory()),
    ]).finally(() => dispatch(setLoading(false)));
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {location.pathname !== "/" && errorPage && (
            <NavBar
              deployMenu={() => {
                setDeployMenu(!deployMenu);
              }}
            />
          )}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<UserLogin />} />
            <Route
              path="/resetpass"
              element={<ResetPaas setErrorPage={setErrorPage} />}
            />
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
            <Route path="/adminEditProd" element={<AdminEditProduct />} />
            <Route path="/adminPagos" element={<AdminPagos />} />
            <Route path="/adminQuestions" element={<AdminQuestions />} />
            {/* <Route path="/favorites"/> */}
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/review/:id" element={<Review />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Error setErrorPage={setErrorPage} />} />
          </Routes>
          <SettingsUser
            bool={deployMenu}
            deployMenu={() => {
              setDeployMenu(!deployMenu);
            }}
          />
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
