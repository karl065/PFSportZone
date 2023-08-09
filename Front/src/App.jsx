/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {NavBar} from './Components';
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
  AdminSales,
  Cart,
  ResetPaas,
  Compra,
  DetalleCompra,
  AdminEditUser,
} from './Views';
import {
  getCategory,
  getCompras,
  getInventory,
  getMarca,
  getSports,
  getUser,
  getUsers,
  setLoading,
} from './redux/actions/actions';
import {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import SettingsUser from './Components/SettingsUser/SettingsUser';
import AccountClient from './Views/AccountClient/AccountClient';
import Favorites from './Views/favorites/Favorites';

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // * Estado para no mostrar la nav en la pagina 404
  const [errorPage, setErrorPage] = useState(true);
  // * Estado para el despliegue del menu de usuario
  let [deployMenu, setDeployMenu] = useState(false);

  useEffect(() => {
    if (token) dispatch(getUser(navigate, token));
  }, [token]);

  // * Carga inicial de los datos necesarios para la app.
  useEffect(() => {
    dispatch(setLoading(true));
    Promise.all([
      dispatch(getUsers()),
      dispatch(getCategory()),
      dispatch(getSports()),
      dispatch(getMarca()),
      dispatch(getInventory()),
      dispatch(getCompras()),
    ]).then(() => dispatch(setLoading(false)));
  }, [dispatch]);
  return (
    <div className="App">
      {location.pathname !== '/' && errorPage && (
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
        <Route
          path="/Account/client"
          element={<AccountClient setErrorPage={setErrorPage} />}
        />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminEmployes" element={<AdminEmployes />} />
        <Route path="/adminNewProduct" element={<AdminNewProduct />} />
        <Route path="/adminNewMarca" element={<AdminNewMarca />} />
        <Route path="/adminNewDeportes" element={<AdminNewDeportes />} />
        <Route path="/adminNewUser" element={<AdminNewUsers />} />
        <Route path="/adminNewCategory" element={<AdminNewCategory />} />
        <Route path="/adminEditProd" element={<AdminEditProduct />} />
        <Route path="/adminEditUser" element={<AdminEditUser />} />
        <Route path="/adminSales" element={<AdminSales />} />
        <Route path="/adminQuestions" element={<AdminQuestions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Compra" element={<Compra />} />
        <Route path="/detalleCompra" element={<DetalleCompra />} />
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
    </div>
  );
}

export default App;
