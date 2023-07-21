import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fas);
const AdminBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        style={{background: '#749900'}}
      >
        <div className="container-fluid d-flex flex-column p-0">
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
          <ul id="accordionSidebar" className="navbar-nav text-light">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <FontAwesomeIcon icon="shopping-cart" />
                <span> Vender</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                <FontAwesomeIcon icon="user" />
                <span> Personalizar</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="table.html">
                <FontAwesomeIcon icon="cogs" />
                <span> Configurar</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <FontAwesomeIcon icon="user-circle" />
                <span> Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                <FontAwesomeIcon icon="unlock-alt" />
                <span> Register</span>
              </a>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              id="sidebarToggle"
              className="btn rounded-circle border-0"
              type="button"
            ></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminBar;
