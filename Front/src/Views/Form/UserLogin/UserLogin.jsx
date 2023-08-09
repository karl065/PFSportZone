/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { login, thirdLogin } from "../../../helpers/helperLogin";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import { createUser } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import googleIcon from "../../../assets/google-icon.svg";
import facebookIcon from "../../../assets/facebook-icon.svg";
import styles from "./UserLogin.module.css";

const UserLogin = () => {
  const users = useSelector((state) => state.app.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // * Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("No es un email").required("Email requerido"),
    password: Yup.string().required("Contraseña requerida"),
  });

  // * Configura Formik y su estado inicial
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password, navigate, dispatch);
    },
  });

  const swalErrorAuth = (error) => {
    console.log("Swal error", error);
    // * Solo muestro el error cuando NO ES por un cierre intencional del popup o de validación de DB [Email ya registrado/único].
    if (
      error?.original.code !== "23505" &&
      error?.code !== "auth/popup-closed-by-user"
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!. Please try again later.",
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google result", result);
      const newUser = {
        email: result.user.email,
        user: result.user.displayName,
        userStatus: true,
        role: "Cliente",
      };

      // ? Ver si después podemos hacer esto solo cuando no existe un usuario con ese email. y evitar la validación de arriba "23505"
      if (users.find((user) => user.email === newUser.email)) {
        await thirdLogin(newUser.email, navigate, dispatch);
      } else {
        await dispatch(createUser(newUser));
        await thirdLogin(newUser.email, navigate, dispatch);
      }
    } catch (error) {
      if (error?.code === "auth/account-exists-with-different-credential") {
        // ? Informar al usuario que ingrese con el otro proveedor que ya tiene.
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ya existe una cuenta con este correo electrónico. Por favor, inicie sesión con el otro proveedor antes de intentar vincular las cuentas.",
        });
      } else {
        swalErrorAuth(error);
      }
    }
  };

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook result", result);
      const newUser = {
        email: result.user?.providerData[0].email,
        user: result.user.displayName,
        userStatus: true,
        role: "Cliente",
      };

      console.log("new user facebook", newUser);

      if (users.find((user) => user.email === newUser.email)) {
        await thirdLogin(newUser.email, navigate, dispatch);
      } else {
        await dispatch(createUser(newUser));
        await thirdLogin(newUser.email, navigate, dispatch);
      }
    } catch (error) {
      if (error?.code === "auth/account-exists-with-different-credential") {
        // ? Informar al usuario que ingrese con el otro proveedor que ya tiene.
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ya existe una cuenta con este correo electrónico. Por favor, inicie sesión con el otro proveedor antes de intentar vincular las cuentas.",
        });
      } else {
        swalErrorAuth(error);
      }
    }
  };

  return (
    <section>
      <div
        id="ng-login"
        className={`${styles.login_container} bg-gradient-primary`}
        style={{ background: "#42b73a", "--bs-success": "#42b73a" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-9 col-lg-12 col-xl-10"
              style={{ width: "400px" }}
            >
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div
                      className="col-lg-6"
                      style={{
                        borderRadius: "10px",
                        borderColor: "rgba(133,135,150,0)",
                        width: "400px",
                      }}
                    >
                      <div className="p-5" style={{ width: "100%" }}>
                        <div className="text-center">
                          <h4
                            className="text-dark mb-4"
                            style={{ fontSize: "2.4rem" }}
                          >
                            BIENVENIDO!
                          </h4>
                        </div>
                        <form className="user" onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <input
                              id="correo"
                              className="form-control form-control-user"
                              type="text"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              name="email"
                              style={{ borderRadius: "0px" }}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div className="text-danger">
                                {formik.errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <input
                              id="exampleInputPassword"
                              className="form-control form-control-user"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              type="password"
                              placeholder="Contraseña"
                              name="password"
                              style={{ borderRadius: "0px" }}
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <div className="text-danger">
                                {formik.errors.password}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <div className="custom-control custom-checkbox small">
                              <hr />
                            </div>
                          </div>
                          <button
                            id="registrarse"
                            className="btn btn-success fs-5 link-light d-block btn-user w-100"
                            disabled={!formik.isValid || formik.isSubmitting}
                            type="submit"
                            style={{
                              background: "#42b73a",
                              borderRadius: "0px",
                            }}
                          >
                            Ingresar
                          </button>
                          <div className={styles.externalAuthButtons}>
                            <button
                              type="button"
                              onClick={signInWithGoogle}
                              className={styles.btnLoginGoogle}
                            >
                              <img src={googleIcon} alt="Google icon" />
                              Ingresar con google
                            </button>
                            <button
                              type="button"
                              onClick={signInWithFacebook}
                              className={styles.btnLoginFacebook}
                            >
                              <img src={facebookIcon} alt="Facebook icon" />
                              Ingresar con facebook
                            </button>
                          </div>
                          <hr />
                          <p className={styles.loginParagraph}>
                            Aun no tiene cuenta?
                            <Link to="/register" className={styles.loginText}>
                              Registrese
                            </Link>
                          </p>
                          {/* <p className={styles.PassO}><Link to={'/login/resetpass'}>Olvidaste tu contraseña?</Link></p>
                          <hr /> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
