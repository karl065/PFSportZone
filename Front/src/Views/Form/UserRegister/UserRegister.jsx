import "bootstrap/dist/css/bootstrap.min.css";
import 'simple-line-icons/css/simple-line-icons.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import styles from './UserRegister.module.css';
import Swal from 'sweetalert2';
import {createUser} from '../../../redux/actions/actions';
import {login} from '../../../helpers/helperLogin';

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
  const role = localStorage.getItem('role');

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Email requerido')
      .email('No es un email'),
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
    <div id="wrapper" style={{display: 'inlineFlex', width: '100%'}}>
    <div id="content-wrapper" className="d-flex flex-column" style={{"width": "100%"}}>
       <div id="content" style={{width: '100%', background: 'var(- -bs-emphasis-color)'}}>
        <div className="container-fluid" style={{height: '800px',width: '100%',display: 'block' ,position: 'absolute',fontSize: "20px",paddingRight: '0px'}}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({errors}) => (
          <>
            <Form style={{width: '360px',marginLeft: '0px',background: '#485e00',fontFamily: "Nunito, sansSerif",borderBottomColor: 'rgba(133, 135, 150, 0.65)', height: '600px', marginTop: '10px'}}>
            <hr style={{height: '6px', marginBottom: '0px', marginTop: '0px'}} />
            <div className="col-md-8" style={{width: '340px',paddingLeft: '0px',textAlign: 'center',background: 'rgb(32, 29, 38)', marginTop: '0px', marginRight: '10px', marginBottom: '10px', paddingTop: '0px', paddingRight: '0px', marginLeft: '8px',borderRadius: '16px'}}>
            <hr style={{color: 'rgb(225,228,252)',textAlign: 'center'}}/>
              {(!role || role === "Cliente") && <p style={{fontSize: '20px',color: 'rgb(255,255,255)',marginTop: '1px'}}>
                Ya tiene una cuenta?     
                <Link to="/login" style={{fontSize: '20px',color: 'rgb(163, 160, 245)',marginTop: '1px'}}> Ingrese
                </Link>
              </p>}
              <hr />
                    <h1 style={{fontSize: '24px',color: '#ffffff',marginTop: '5px', textShadow: '1px 1px var(- -bs-emphasis-color)'}}>CREAR USUARIO</h1>
                    <hr style={{color: 'rgb(225,228,252)',textAlign: 'center'}}/>
              <div className="form-group mb-3" style={{marginLeft: '30px',width: '80%',marginRight: '30px'}}>
                  <div style={{ display: 'flex',  width: '100%',  marginBottom: '15px'}}>
                      <i className="icon-envelope"
									          style={{marginRight: '8px', color: '#485e00', width: '57px', paddingTop: '10px', paddingLeft: '3px', boxShadow: 'inset 0px 0px 3px var(- -bs-secondary-color)', fontSize: '25px', height: '44px'}}></i>
                            <Field                                
                                style={{background: 'rgba(255, 255, 255, 0)',width: '240px', borderColor: 'rgba(133, 135, 150, 0)', borderBottomColor: '#ffffff', padding: '10px', outline: 'none', borderRadius: '0',color: 'rgb(255, 255, 255)'}}
                                name="email"
                                placeholder="Email"
                                type="text"
                                autoComplete="off"
                              />
                              <ErrorMessage
                        name="email"
                        component="span"
                        className={styles.error}
                      />
                  </div>

                  <div style={{  display: 'flex',  width: '100%',  marginBottom: '15px'}}>
                  <i className="icon-user"
									          style={{marginRight: '8px', color: '#485e00', width: '57px', paddingTop: '10px', paddingLeft: '3px', boxShadow: 'inset 0px 0px 3px var(- -bs-secondary-color)', fontSize: '25px', height: '44px'}}></i>     
                      <Field 
                        style={{background: 'rgba(255, 255, 255, 0)',width: '240px', borderColor: 'rgba(133, 135, 150, 0)', borderBottomColor: '#ffffff', padding: '10px', outline: 'none', borderRadius: '0',color: 'rgb(255, 255, 255)'}}
                        name="user"
                        placeholder="Usuario"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="user"
                        component="span"
                        className={styles.error}
                      />
                      
                </div>

                <div style={{  display: 'flex',  width: '100%',  marginBottom: '15px'}}>
                <i className="icon-key"
									          style={{marginRight: '8px', color: '#485e00', width: '57px', paddingTop: '10px', paddingLeft: '3px', boxShadow: 'inset 0px 0px 3px var(- -bs-secondary-color)', fontSize: '25px', height: '44px'}}></i>      
               
                <Field
                  style={{background: 'rgba(255, 255, 255, 0)',width: '240px', borderColor: 'rgba(133, 135, 150, 0)', borderBottomColor: '#ffffff', padding: '10px', outline: 'none', borderRadius: '0',color: 'rgb(255, 255, 255)'}}
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={styles.error}
                />
                
              </div>
              <div style={{  display: 'flex',  width: '100%',  marginBottom: '15px'}}>
              <i className="icon-key"
									          style={{marginRight: '8px', color: '#485e00', width: '57px', paddingTop: '10px', paddingLeft: '3px', boxShadow: 'inset 0px 0px 3px var(- -bs-secondary-color)', fontSize: '25px', height: '44px'}}></i>
                
                <Field
                  style={{background: 'rgba(255, 255, 255, 0)',width: '240px', borderColor: 'rgba(133, 135, 150, 0)', borderBottomColor: '#ffffff', padding: '10px', outline: 'none', borderRadius: '0',color: 'rgb(255, 255, 255)'}}
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Confirmar contraseña"
                  autoComplete="off"
                  
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="span"
                  className={styles.error}
                />
                
              </div>
              {urlCurrent === '/adminNewUser' ? (
                <div style={{  display: 'flex',  width: '100%',  marginBottom: '15px'}}>
                   <i className="icon-chart"
									          style={{marginRight: '8px', color: '#485e00', width: '57px', paddingTop: '10px', paddingLeft: '3px', boxShadow: 'inset 0px 0px 3px var(- -bs-secondary-color)', fontSize: '25px', height: '44px'}}></i>
                
                
                  <Field as="select" name="role"  className="form-select" 
                  style={{background: 'rgba(255, 255, 255, 0)',width: '360px', borderColor: 'rgba(133, 135, 150, 0)', borderBottomColor: '#ffffff', padding: '10px', outline: 'none', borderRadius: '0',color: 'rgb(255, 255, 255)',fontSize: '20px'}}>
                    <option style={{backgroundColor: 'rgb(32, 29, 38)',color: '#ffffff',fontSize: '20px'}} value="" >Seleccione un Rol</option>
                    <option style={{backgroundColor: 'rgb(32, 29, 38)',color: '#ffffff',fontSize: '20px'}}  value="Cliente">Cliente</option>
                    <option style={{backgroundColor: 'rgb(32, 29, 38)',color: '#ffffff',fontSize: '20px'}}  value="Empleados">Empleado</option>
                    <option style={{backgroundColor: 'rgb(32, 29, 38)',color: '#ffffff',fontSize: '20px'}}  value="Admin">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="span"
                    className={styles.error}
                  />
                 
                </div>
              ) : null}
              
              <hr style={{color: 'rgb(225,228,252)',textAlign: 'center'}} />
                        <div className="row" style={{marginTop: '10px'}}>
                            <div className="col" style={{height: '38px',paddingLeft: '0px',paddingRight: '0px'}}>
                              <button type="submit"
        
                disabled={Object.keys(errors).length > 0}  style={{width: '180px', height: '44px', marginLeft: '20px', background: 'rgb(64, 94, 0)', fontSize: '20px', borderRadius: '0px',  fontFamily: 'Nunito', fontWeight: 'bold',color: 'rgb(255, 255, 255)'}}>{(!role || role === "Cliente") ? "REGISTRARSE" : "REGISTRAR"}</button></div>
                        </div>
                        <hr />
              </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
     
      </div>
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dpjeltekx/image/upload/v1689812951/PF/image1_xrg2b8.png"
        alt="imagen-landing"
      />
      </div>
    </div>
    </div>
  );
};

export default UserRegister;
