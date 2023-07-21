import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Form} from 'react-bootstrap';
import {useState} from 'react';

library.add(fas);
const AdminEmployes = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <nav
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
          style={{
            background: '#749900',
            overflow: 'visible',
            position: 'relative',
            height: '600px',
          }}
        >
          <div className="container-fluid d-flex flex-column p-3">
            <a
              className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              href="#"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon="passport" />
              </div>
              <div className="sidebar-brand-text mx-3">
                <span>SportZone</span>
              </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <div className="sidebar-brand-text mx-3">
              <span> </span>
            </div>
            <ul className="navbar-nav text-light" id="accordionSidebar">
              <li className="nav-item">
                <a className="nav-link" href="/adminProducts">
                  <FontAwesomeIcon icon="shopping-cart" />
                  <span> Productos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/adminUsers">
                  <FontAwesomeIcon icon="user" />
                  <span> Usuarios</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <FontAwesomeIcon icon="user-circle" />
                  <span> Empleados</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon="unlock-alt" />
                  <span> Pagos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/create">
                  <FontAwesomeIcon icon="tshirt" />
                  <span> Crear Producto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon="cogs" />
                  <span> Configuración</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{flex: '1', flexGrow: '1'}}
        >
          <div id="content">
            <div className="container-fluid" style={{display: 'block'}}>
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Empleados</h3>
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
                        <div className="row align-items-center no-gutters">
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
                              <strong>Estado de Empleado</strong>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="row align-items-center no-gutters">
                          <div className="col me-2">
                            <p>ID</p>
                          </div>
                          <div className="col me-2">
                            <p>Nombre</p>
                          </div>
                          <div className="col me-2">
                            <p>Apellido</p>
                          </div>
                          <div className="col me-2">
                            <p>Correo</p>
                          </div>
                          <div className="col me-2">
                            <p>Tipo</p>
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

export default AdminEmployes;
