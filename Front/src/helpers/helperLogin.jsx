import axios from "axios";
import server from "../Connections/Server";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// * Reutilizable para logearse, retorna una promesa para manejar error y mostrar un sweet alert o no.
const login = async (email, password, navigate) => {
  try {
    const { data } = await axios.post(`${server.api.baseURL}auth`, {
      email,
      password,
    });
    if (data.msg) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.msg,
      });
    }
    
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("idCarrito", data.carrito.idCar);

    const role = data.role;
    if (role === "SuperUser" || role === "Admin" || role === "Empleados") {
      navigate("/adminProducts");
    } else if (role === "Cliente") {
      navigate("/home");
    }
  } catch (error) {
    return error;
  }
};

// * Retorna un booleano para saber si el usuario esta logeado o no (Token auth).
const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  }

  return false;
};

// * La función `logout` elimina el elemento 'token' del localStorage.
const handleLogout = async (navigate) => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("idCarrito");
    navigate("/");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Couldn't sign out. Please try again",
    });
  }
};

export { login, isLoggedIn, handleLogout };
