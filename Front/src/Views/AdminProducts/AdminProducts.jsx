/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

library.add(fas);

const AdminProducts = () => {
  const inventario = useSelector((state) => state.inventory);
  // const category = useSelector((state) => state.category);
  const [statusOption, setStatusOption] = useState([
    'Available',
    'Not Available',
    'Discontinued',
  ]);

  useEffect(() => {
    console.log(inventario);
    const statusToRemove = inventario.map((item) => item.status);
    setStatusOption((prevStatusOption) =>
      prevStatusOption.filter((status) => !statusToRemove.includes(status))
    );
  }, [inventario]);

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
                    <Link to="/adminNewCategory">
                      <FontAwesomeIcon icon="tshirt" />
                      <span> Crear Categoria</span>
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
                    <Link to="/">
                      <FontAwesomeIcon icon="cogs" />
                      <span> Configuracion</span>
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
                <h3 className="text-dark mb-0">Productos</h3>
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
                              <strong>Imagen</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Nombre</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Referencia</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Categoria</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Precio</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Cantidad</strong>
                            </h6>
                          </div>
                          <div className="col me-2">
                            <h6 className="mb-0">
                              <strong>Status</strong>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {inventario.map((prod, index) => (
                      <ul key={index} className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                              <p>{prod.id_inventory}</p>
                            </div>
                            <div className="col">
                              {prod.image[0] && (
                                <img
                                  width={100}
                                  src={prod.image[0]}
                                  alt={prod.article_name}
                                />
                              )}
                            </div>
                            <div className="col me-2">
                              <p>{prod.article_name}</p>
                            </div>
                            <div className="col me-2">
                              <p>{prod.description}</p>
                            </div>
                            <div className="col me-2">
                              {prod.categorias ? (
                                <p>{prod.categorias.categoryName}</p>
                              ) : (
                                'categoria'
                              )}
                            </div>
                            <div className="col me-2">
                              <p>{prod.selling_price}</p>
                            </div>
                            <div className="col me-2">
                              <p>{prod.stock}</p>
                            </div>
                            <div className="col me-2">
                              <select
                                style={{width: 'auto', minWidth: '100px'}}
                              >
                                <option value={prod.status}>
                                  {prod.status}
                                </option>
                                {statusOption.map((option, index) => (
                                  <option value={option} key={index}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
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

export default AdminProducts;
