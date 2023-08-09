import axios from 'axios';
import server from '../Connections/Server';
import Swal from 'sweetalert2';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig';
import {clearUser, setLoading, setUser} from '../redux/actions/actions';
import {clearCart, mergeLocalCart} from '../redux/actions/cartActions';

// * Obtiene el carrito del localStorage
const getLocalCart = () => {
  let localCart = localStorage.getItem('localCart');
  return localCart ? JSON.parse(localCart) : [];
};

// * Reutilizable para logearse, retorna una promesa para manejar error y mostrar un sweet alert o no.
const login = async (email, password, navigate, dispatch) => {
  try {
    dispatch(setLoading(true));
    const {data} = await axios.post(`${server.api.baseURL}auth`, {
      email,
      password,
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem('idCarrito', data?.carrito?.idCar);
    dispatch(setUser(data));

    // * Merge del carrito local con el del usuario si tiene al menos un elemento.
    const localCart = getLocalCart();
    if (localCart.length > 0) {
      await dispatch(mergeLocalCart(data.id, localCart));
    }
    localStorage.removeItem('localCart');

    const role = data.role;
    if (role === 'SuperUser' || role === 'Admin' || role === 'Empleados') {
      navigate('/adminProducts');
    } else if (role === 'Cliente') {
      navigate('/home');
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email o contraseña incorrectos.',
    });
  } finally {
    dispatch(setLoading(false));
  }
};

const thirdLogin = async (email, navigate, dispatch) => {
  try {
    dispatch(setLoading(true));
    // ? Login para terceros => Solo ingresa con el email brindado por Google/Facebook auth.
    // * Llega objeto {token:"blabla", user: {bla:blabla bla:bla}}
    const {data} = await axios.post(`${server.api.baseURL}auth/third-user`, {
      email,
    });

    // * Llega id, email, user, role, carrito.
    dispatch(setUser(data.user));

    localStorage.setItem('token', data.token);
    localStorage.setItem('idCarrito', data.user.carrito?.idCar);

    // * Merge del carrito local con el del usuario si tiene al menos un elemento.
    const localCart = getLocalCart();
    if (localCart.length > 0) {
      await dispatch(mergeLocalCart(data.user.id, localCart));
    }
    localStorage.removeItem('localCart');

    const role = data.user.role;
    if (role === 'SuperUser' || role === 'Admin' || role === 'Empleados') {
      navigate('/adminProducts');
    } else if (role === 'Cliente') {
      navigate('/home');
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Hubo un error en el ingreso. Intente nuevamente.',
    });
  } finally {
    dispatch(setLoading(false));
  }
};

// * Retorna un booleano para saber si el usuario esta logeado o no (Token auth).
const isLoggedIn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
};

// * La función `logout` elimina el elemento 'token' del localStorage.
const handleLogout = async (navigate, dispatch) => {
  try {
    dispatch(setLoading(true));
    await signOut(auth);
    dispatch(clearCart());
    dispatch(clearUser());

    localStorage.removeItem('localCart');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('idCarrito');
    localStorage.removeItem('idUser');

    navigate('/');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Couldn't sign out. Please try again",
    });
  } finally {
    dispatch(setLoading(false));
  }
};

export {login, thirdLogin, isLoggedIn, handleLogout};
