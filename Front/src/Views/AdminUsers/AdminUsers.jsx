import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {Form} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import Sidebar from '../../Components/SideBar/Sidebar';

library.add(fas);
const AdminUsers = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Lógica para cargar los usuarios iniciales
    axios
      .get('https://backsportzone.onrender.com/users')
      .then(({data}) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <Sidebar />
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{flex: '1', flexGrow: '1'}}
        >
          <div id="content">
            <div className="container-fluid" style={{display: 'block'}}>
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Usuarios</h3>
                <div>
                  <select
                    style={{height: '38px', marginTop: '10px'}}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option defaultValue="">Filtrar por</option>
                    <option value="Usuarios">Usuarios</option>
                    <option value="Empleados">Empleados</option>
                  </select>
                </div>
                <div></div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{marginTop: '10px', background: '#749900'}}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div></div>
              <div className="row">
                <div
                  className="col-lg-6 mb-4"
                  style={{display: 'block', width: '100%'}}
                >
                  <div className="card shadow mb-4"></div>
                  <div className="card shadow mb-4" style={{width: '100%'}}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div
                          className="row align-items-center no-gutters"
                          style={{
                            fontSize: '18px',
                          }}
                        >
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>ID</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Nombre</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Apellido</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Correo</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Tipo</strong>
                            </h6>
                          </div>
                          <div className="col-auto">
                            <h6 className="mb-0">
                              <strong>Estado de Usuario</strong>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul
                      className="list-group list-group-flush"
                      style={{
                        fontSize: '16px',
                      }}
                    >
                      <li className="list-group-item">
                        {users.map((user) => (
                          <div
                            className="row align-items-center no-gutters"
                            key={user.idUser}
                          >
                            <div className="col me-2">
                              <p>{user.idUser}</p>
                            </div>
                            <div className="col me-2">
                              <p>{user.user}</p>
                            </div>
                            <div className="col me-2">
                              <p>{user.apellido}</p>
                            </div>
                            <div className="col me-2">
                              <p>{user.email}</p>
                            </div>
                            <div className="col me-2">
                              <p>{user.role}</p>
                            </div>

                            <div className="col-auto">
                              <Form>
                                <Form.Check
                                  type="switch"
                                  id="switchButton"
                                  label="Activo/Inactivo"
                                  checked={isSwitchOn}
                                  onChange={handleSwitchChange}
                                />
                              </Form>
                            </div>
                          </div>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};
export default AdminUsers;
