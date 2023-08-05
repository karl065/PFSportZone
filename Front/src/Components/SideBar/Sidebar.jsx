import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import styles from './Sidebar.module.css';
import React, { useState } from 'react';

const Sidebar = () => {
  

    const [sidebarOpen, setSidebarOpen] = useState(true);
  
    const handleSidebarToggle = () => {
      setSidebarOpen(!sidebarOpen);
    };


  return (
    <div>
      
      <nav
        className={`navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 ${
          sidebarOpen ? styles.open : styles.closed
        }`}
        style={{
          background: '#749900',
          position: 'relative',
          overflow: 'visible',
          height: '100%',
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
            <hr className="sidebar-divider my-2" />
            <li
              className={`nav-item ${
                location.pathname === '/adminNewUser' ? styles.active : ''
              }`}
            >
              <Link to="/adminNewUser">
                <FontAwesomeIcon icon="user-plus" />
                <span> Crear Usuario</span>
              </Link>
            </li>
            <hr className="sidebar-divider my-2" />
            <li>
              <Link to="/adminEditUser">
                <FontAwesomeIcon icon="user-circle" />
                <span> Editar Usuario</span>
              </Link>
            </li>
            <hr className="sidebar-divider my-2" />
            <li
              className={`nav-item ${
                location.pathname === '/adminPagos' ? styles.active : ''
              }`}
            >
              <Link to="/adminSales">
                <FontAwesomeIcon icon="money-check-alt" />
                <span> Ventas</span>
              </Link>
            </li>
            <hr className="sidebar-divider my-2" />
            <li
              className={`nav-item ${
                location.pathname === '/adminNewDeportes' ? styles.active : ''
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
                location.pathname === '/adminNewCategory' ? styles.active : ''
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
                location.pathname === '/adminNewProduct' ? styles.active : ''
              }`}
            >
              <Link to="/adminNewProduct">
                <FontAwesomeIcon icon="shopping-basket" />
                <span> Crear Producto</span>
              </Link>
            </li>
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
            <li className="nav-item">
              <Link to="/">
                <FontAwesomeIcon icon="unlock-alt" />
                <span> Salir</span>
              </Link>
            </li>
            
          </ul>
      
          <div className="text-center d-none d-md-inline" style={{'marginTop': '20px'}}>
            <button id="sidebarToggle" onClick={handleSidebarToggle} className="btn rounded-circle border-0" type="button" style={{background: '#a4da03',width: '40px',height: '40px'}}>
            <FontAwesomeIcon icon="chevron-left" />
              </button>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
