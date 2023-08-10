import 'bootstrap/dist/css/bootstrap.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import styles from './UserRegister.module.css';
import Swal from 'sweetalert2';
import {createUser} from '../../../redux/actions/actions';
import {isLoggedIn, login} from '../../../helpers/helperLogin';

const initialValues = {
  email: '',
  user: '',
  password: '',
  passwordConfirmation: '',
  role: 'Cliente',
};

export const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const urlCurrent = location.pathname;
  const role = useSelector((state) => state.app.user);
  const {users} = useSelector((state) => state.app);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Email requerido')
      .email('No es un email')
      .test('unique-email', 'El email ya esta registrado', (value) => {
        return !users.some((user) => user.email === value.trim());
      }),
    user: Yup.string()
      .trim()
      .required('Usuario requerido')
      .min(5, 'Muy corto! Al menos 5 caracteres')
      .max(30, 'Muy largo! No mas de 30 caracteres'),
    password: Yup.string()
      .trim()
      .required('Contraseña requerida')
      .matches(/^\S*$/, 'No puede contener espacios')
      .min(5, 'Al menos 5 caracteres'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Confirmación requerida'),
    role: Yup.string()
      .trim()
      .required('Rol requerido')
      .oneOf(['Cliente', 'Empleados', 'Admin'], 'Elija un rol'),
  });

  const handleSubmit = async (values) => {
    // ? Implementar como un componente loading que tenga un fondo tipo swal, centrado en la pantalla y cargue un spinner.
    try {
      const newUser = {
        ...values,
        userStatus: true,
      };

      await dispatch(createUser(newUser));
      Swal.fire('Buen trabajo!', 'Registrado con éxito!', 'success');
      if (location.pathname === '/register') {
        await login(values.email, values.password, navigate, dispatch);
      } else {
        navigate('/adminUsers');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en el registro. Intente nuevamente.',
      });
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({errors}) => (
          <div className={styles.form_container}>
            <Form className={styles.form}>
              {!isLoggedIn() && (
                <p className={styles.loginParagraph}>
                  Ya tiene una cuenta?
                  <Link to="/login" className={styles.loginText}>
                    Ingrese
                  </Link>
                </p>
              )}
              <h1 className={styles.title}>REGISTRO</h1>
              <div className={styles.field}>
                <i className={`icon-envelope ${styles.icon}`}></i>
                <div>
                  <label>Email</label>
                  <Field
                    name="email"
                    placeholder="Email"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <i className={`icon-user ${styles.icon}`}></i>
                <div>
                  <label>Usuario</label>
                  <Field
                    name="user"
                    placeholder="Usuario"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="user"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <i className={`icon-key ${styles.icon}`}></i>
                <div>
                  <label>Contraseña</label>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className={styles.error}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <i className={`icon-key ${styles.icon}`}></i>
                <div>
                  <label>Confirmar contraseña</label>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirmar contraseña"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>
              {urlCurrent === '/adminNewUser' ? (
                <div className={styles.field}>
                  <div>
                    <label>Rol</label>
                    <Field
                      as="select"
                      name="role"
                      className={styles.role_select}
                    >
                      <option value="">Seleccione un Rol</option>
                      <option value="Cliente">Cliente</option>
                      <option value="Empleados">Empleado</option>
                      <option value="Admin">Admin</option>
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="span"
                      className={styles.error}
                    />
                  </div>
                </div>
              ) : null}
              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={Object.keys(errors).length > 0}
              >
                {!role || role === 'Cliente' ? 'Registrarse' : 'Registrar'}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default UserRegister;
