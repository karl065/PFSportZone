import axios from "axios";
import server from "../Connections/Server";

// * Reutilizable para logearse, retorna una promesa para manejar error y mostrar un sweet alert o no.
const login = (email, password, navigate) => {
  return axios
    .post(`${server.api.baseURL}auth`, { email, password })
    .then((response) => {
      const data = response.data;
      localStorage.setItem("token", data.token.token);
      localStorage.setItem("role", data.token.role);
      const role = data.token.role;

      if (role === "SuperUser" || role === "Admin") {
        navigate("/adminProducts");
      } else if (role === "Cliente") {
        navigate("/home");
      }
    });
};

export { login };
