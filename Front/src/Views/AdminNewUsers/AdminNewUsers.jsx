import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import UserRegister from '../Form/UserRegister/UserRegister';
library.add(fas);
const AdminNewUsers = () => {
  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <nav
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
          style={{
            background: '#749900',
            position: 'relative',
            overflow: 'visible',
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
                <Link to="/adminProducts">
                  <FontAwesomeIcon icon="shopping-cart" />
                  <span> Productos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminUsers">
                  <FontAwesomeIcon icon="user" />
                  <span> Usuarios</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminEmployes">
                  <FontAwesomeIcon icon="user-circle" />
                  <span> Empleados</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <FontAwesomeIcon icon="unlock-alt" />
                  <span> Pagos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminNewProduct">
                  <FontAwesomeIcon icon="tshirt" />
                  <span> Crear Producto</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminNewUser">
                  <FontAwesomeIcon icon="tshirt" />
                  <span> Crear Usuarios</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminNewUser">
                  <FontAwesomeIcon icon="tshirt" />
                  <span> Crear Usuarios</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <FontAwesomeIcon icon="cogs" />
                  <span> Configuración</span>
                </Link>
              </li>
            </ul>
            <div className="text-center d-none d-md-inline">
              <button
                className="btn rounded-circle border-3"
                id="sidebarToggle"
                type="button"
              ></button>
            </div>
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
                <h3 className="text-dark mb-0">Nuevo Producto</h3>
                <div>
                  <select style={{height: '38px', marginTop: '10px'}}>
                    <option defaultValue="12">Filtrar por</option>
                    <option value="12">Usuarios</option>
                    <option value="13">Empleados</option>
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
              <UserRegister />
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

export default AdminNewUsers;
