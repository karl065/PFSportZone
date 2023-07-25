/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import server from '../Connections/Server';
import Swal from 'sweetalert2';

// * Reutilizable para logearse, retorna una promesa para manejar error y mostrar un sweet alert o no.
const login = async (email, password, navigate) => {
  try {
    const {data} = await axios.post(`${server.api.baseURL}auth`, {
      email,
      password,
    });
    if (data.msg) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.msg,
      });
    }
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    const role = data.role;
    if (role === 'SuperUser' || role === 'Admin' || role === 'Empleados') {
      navigate('/adminProducts');
    } else if (role === 'Cliente') {
      navigate('/home');
    }
  } catch (error) {
    return error;
  }
};

export {login};
