/* eslint-disable react-hooks/exhaustive-deps */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Sidebar.module.css';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Sidebar = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.app);
  const role = user.role;
  useEffect(() => {
    if (role === 'Cliente') navigate('/');
  }, []);

  return (
    <div>
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
          <hr className="sidebar-divider my-1" />
          <div className="sidebar-brand-text mx-3">
            <span> </span>
          </div>
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li
              className={`nav-item ${
                location.pathname === '/adminProducts' ? styles.active : ''
              }`}
            >
              <Link to="/adminProducts">
                <FontAwesomeIcon icon="shopping-cart" />
                <span> Productos</span>
              </Link>
            </li>
            {role !== 'Empleados' ? (
              <>
                <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminUsers' ? styles.active : ''
                  }`}
                >
                  <Link to="/adminUsers">
                    <FontAwesomeIcon icon="user" />
                    <span> Usuarios</span>
                  </Link>
                </li>
                {role === 'SuperUser' ? (
                  <>
                    <hr className="sidebar-divider my-2" />
                    <li
                      className={`nav-item ${
                        location.pathname === '/adminNewUser'
                          ? styles.active
                          : ''
                      }`}
                    >
                      <Link to="/adminNewUser">
                        <FontAwesomeIcon icon="user-plus" />
                        <span> Crear Usuario</span>
                      </Link>
                    </li>
                  </>
                ) : null}

{/*                 <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminSales' ? styles.active : ''
                  }`}
                >
                  <Link to="/adminSales">
                    <FontAwesomeIcon icon="money-check-alt" />
                    <span> Ventas</span>
                  </Link>
                </li> */}
                <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminNewDeportes'
                      ? styles.active
                      : ''
                  }`}
                >
                  <Link to="/adminNewDeportes">
                    <FontAwesomeIcon icon="fa-passport" />
                    <span> Crear Deporte</span>
                  </Link>
                </li>
                <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminNewMarca' ? styles.active : ''
                  }`}
                >
                  <Link to="/adminNewMarca">
                    <FontAwesomeIcon icon="tshirt" />
                    <span> Crear Marca</span>
                  </Link>
                </li>
                <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminNewCategory'
                      ? styles.active
                      : ''
                  }`}
                >
                  <Link to="/adminNewCategory">
                    <FontAwesomeIcon icon="fa-layer-group" />
                    <span> Crear Categoria</span>
                  </Link>
                </li>
                <hr className="sidebar-divider my-2" />
                <li
                  className={`nav-item ${
                    location.pathname === '/adminNewProduct'
                      ? styles.active
                      : ''
                  }`}
                >
                  <Link to="/adminNewProduct">
                    <FontAwesomeIcon icon="shopping-basket" />
                    <span> Crear Producto</span>
                  </Link>
                </li>
              </>
            ) : null}
            <hr className="sidebar-divider my-2" />
            <li
              className={`nav-item ${
                location.pathname === '/adminEditProd' ? styles.active : ''
              }`}
            >
              <Link to="/adminEditProd">
                <FontAwesomeIcon icon="fa-edit" />
                <span> Editar Producto</span>
              </Link>
            </li>
            <hr className="sidebar-divider my-2" />
            <li
              className={`nav-item ${
                location.pathname === '/adminQuestions' ? styles.active : ''
              }`}
            >
              <Link to="/adminQuestions">
                <FontAwesomeIcon icon="fa-circle-question" />
                <span> Preguntas</span>
              </Link>
            </li>
            <hr className="sidebar-divider my-2" />
            <li className="nav-item">
              <Link to="/">
                <FontAwesomeIcon icon="unlock-alt" />
                <span> Salir</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
