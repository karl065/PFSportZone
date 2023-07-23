/* eslint-disable react/prop-types */
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import server from '../../../Connections/Server';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const UserLogin = () => {
  const navigate = useNavigate();
  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('No es un email correcto')
      .required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  // Configura Formik y su estado inicial
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const {data} = await axios.post(`${server.api.baseURL}auth`, values);

      if (data.token.msg) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.token.msg,
        });
      }
      localStorage.setItem('token', data.token.token);
      localStorage.setItem('role', data.token.role);
      const role = data.token.role;

      if (role === 'SuperUser' || role === 'Admin') {
        navigate('/adminProducts');
      } else if (role === 'Cliente') {
        navigate('/home');
      }
    },
  });

  return (
    <div>
      <div
        id="ng-login"
        className="bg-gradient-primary"
        style={{background: '#42b73a', '--bs-success': '#42b73a'}}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-9 col-lg-12 col-xl-10"
              style={{width: '400px'}}
            >
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div
                      className="col-lg-6"
                      style={{
                        borderRadius: '10px',
                        borderColor: 'rgba(133,135,150,0)',
                        width: '400px',
                      }}
                    >
                      <div className="p-5" style={{width: '100%'}}>
                        <div className="text-center">
                          <h2
                            className="text-dark mb-4"
                            style={{fontSize: '30px',"fontFamily": "Assistant, sans-serif"}}
                          >
                            Bienvenido!
                          </h2>
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
                              placeholder="Usuario..."
                              name="email"
                              style={{borderRadius: '0px',fontSize: "16px","fontFamily": "Assistant, sans-serif"}}
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
                              placeholder="Password"
                              name="password"
                              style={{borderRadius: '0px', fontSize: "16px","fontFamily": "Assistant, sans-serif"}}
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
                            style={{background: '#42b73a', borderRadius: '0px',fontSize: "16px","fontFamily": "Assistant, sans-serif"}}
                          >
                            Login
                          </button>
                          <hr />
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
    </div>
  );
};

export default UserLogin;
