/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigate, NavLink, Link} from 'react-router-dom';
import {isLoggedIn, handleLogout} from '../../helpers/helperLogin';
import styles from './Landing.module.css';
import Footer from '../../Components/Footer/Footer';
import {useDispatch} from 'react-redux';
import {deleteAllProduct} from '../../redux/actions/cartActions';
import axios from 'axios';
import server from '../../Connections/Server';
import {useEffect} from 'react';
import Swal from 'sweetalert2';
import {getInventory} from '../../redux/actions/actions';

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');
  const {role} = useSelector((state) => state.app.user);

  const fetchData = async () => {
    if (status) {
      const idCarrito = localStorage.getItem('idCarrito');
      try {
        const {data} = await axios.get(
          `${server.api.baseURL}carrito/${idCarrito}`
        );
        for (const item of data.Inventarios) {
          const {id_inventory, CarritoInventarios} = item;
          const newStock = item.stock - CarritoInventarios.cant;
          // Hacer la solicitud PUT al endpoint de inventario para actualizar el stock
          try {
            await axios.put(`${server.api.baseURL}inventory/${id_inventory}`, {
              stock: newStock,
            });
          } catch (error) {
            console.log(
              'Error al actualizar el stock del artículo:',
              error.message
            );
            // Aquí puedes manejar el error según lo que necesites
          }
        }
        Swal.fire('Buen trabajo!', `Compra Exitosa`, 'success');
        dispatch(getInventory());
        dispatch(deleteAllProduct());
        const mail = {
          email: data.usuario.email,
          article_name: data.Inventarios[0].article_name,
        };
        await axios.post(`${server.api.baseURL}mails`, mail);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  //* función para redirigir al home al momento de hacer click a "Tienda"
  const toHome = () => {
    navigate('/home');
  };
  //* función para redirigir al login al momento de hacer click a "Log In"
  const toLogIn = () => {
    navigate('/login');
  };

  useEffect(() => {
    // Define una función asíncrona dentro de useEffect

    // Llama a la función asíncrona dentro de useEffect
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.barraSuperior}>
        <NavLink to="/about">
          <p>Acerca de</p>
        </NavLink>
        {role === 'SuperUser' || role === 'Admin' ? (
          <Link to={'/adminProducts'}>Panel Admin</Link>
        ) : null}
        {isLoggedIn() ? (
          <li onClick={() => handleLogout(navigate)}>Salir</li>
        ) : (
          <NavLink to="/register">
            <p>Registrarse</p>
          </NavLink>
        )}
        {/* <NavLink to="/faq">
          <p>F&A</p>
        </NavLink> */}
      </ul>
      <div className={styles.titles}>
        <h1>SPORTZONE</h1>
        <h3>Todo el deporte en un solo lugar...</h3>
      </div>

      <div className={styles.buttons}>
        <button className={styles.tienda} onClick={toHome}>
          TIENDA
        </button>
        {!isLoggedIn() && <button onClick={toLogIn}>Ingresar</button>}
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
