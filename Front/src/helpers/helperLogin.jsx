import axios from 'axios';
import server from '../Connections/Server';
import Swal from 'sweetalert2';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig';
import { setUser } from '../redux/actions/actions';

// * Reutilizable para logearse, retorna una promesa para manejar error y mostrar un sweet alert o no.
const login = async (email, password, navigate, dispatch) => {
  try {;
    const {data} = await axios.post(`${server.api.baseURL}auth`, {
      email,
      password,
    });

    dispatch(setUser(data));

    localStorage.setItem('token', data.token);
    localStorage.setItem('idCarrito', data.carrito.idCar);

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
const handleLogout = async (navigate) => {
  try {
    await signOut(auth);
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
  }
};

export {login, isLoggedIn, handleLogout};
