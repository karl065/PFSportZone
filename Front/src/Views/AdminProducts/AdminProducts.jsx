import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getInventory} from '../../redux/actions/actions';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

library.add(fas);
const AdminProducts = () => {

  const dispatch = useDispatch();
  const displayInventory = useSelector((state) => state.displayInventory);
  useEffect(() => {
    dispatch(getInventory());
  }, []);
  //console.log(displayInventory);

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
            <hr className="sidebar-divider my-1" />
            <div className="sidebar-brand-text mx-3">
              <span> </span>
            </div>
            <ul className="navbar-nav text-light" id="accordionSidebar">
                  <li className="nav-item" style={{"color": "var(--bs-gray-dark)"}}>
                    <Link to="/adminProducts">
                      <FontAwesomeIcon icon="shopping-cart" />
                      <span> Productos</span>
                    </Link>
                  </li>
                  <hr className="sidebar-divider my-2" />
                  <li className="nav-item">
                    <Link to="/adminUsers">
                      <FontAwesomeIcon icon="user" />
                      <span> Usuarios</span>
                    </Link>
                  </li>
                  <hr className="sidebar-divider my-2" />
                  <li className="nav-item">
                    <Link to="/adminEmployes">
                      <FontAwesomeIcon icon="user-circle" />
                      <span> Empleados</span>
                    </Link>
                  </li>
                  <hr className="sidebar-divider my-2" />
                  <li className="nav-item">
                    <Link to="/adminPagos">
                      <FontAwesomeIcon icon="money-check-alt" />
                      <span> Pagos</span>
                    </Link>
                  </li>
                  <hr className="sidebar-divider my-2" />
                  <li className="nav-item">
                    <Link to="/adminNewProduct">
                      <FontAwesomeIcon icon="tshirt" />
                      <span> Crear Producto</span>
                    </Link>
                  </li>
                  <hr className="sidebar-divider my-2" />
                  <li className="nav-item">
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
          </div>
        </nav>
        <div className="d-flex flex-column" id="content-wrapper"style={{flex: '1', flexGrow: '1'}}>
          
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
              <div className="container-fluid">
            
            <div className="card shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold" style={{fontSize: "16px","fontFamily": "Assistant, sans-serif","--bs-primary-rgb": "rgb(116,153,0)" }}>Informacion de pagos</p>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-md-6 text-nowrap">
                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show   <select className="d-inline-block form-select form-select-sm">
                                <option defaultValue="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select></label></div>
                </div>
                <div className="col-md-6">
                    <div id="dataTable_filter" className="text-md-end dataTables_filter"><label className="form-label"><input className="form-control form-control-sm" type="search" aria-controls="dataTable" placeholder="Search" /></label></div>
                </div>
            </div>
            <div id="dataTable" className="table-responsive table mt-2" role="grid" aria-describedby="dataTable_info">
                <table id="dataTable" className="table my-0" style={{fontSize: "16px","fontFamily": "Assistant, sans-serif"}}>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Venta P</th>
                            <th>Compra P</th>
                            <th>Stock</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {displayInventory.map((inventory) => (
                        <tr key={inventory.id_inventory}>
                            <td>{inventory.id_inventory}</td>
                            <td><picture>
                              <img src={inventory.image[0]} alt="imagen" style={{"width": "30%", "height": "auto"}} />
                            </picture></td>
                            <td>{inventory.article_name}</td>
                            <td>{inventory.selling_price}</td>
                            <td>{inventory.purchase_price}</td>
                            <td>{inventory.stock}</td>
                            <td>{inventory.description}</td>
                            <td>{inventory.status}</td>
                        </tr>
                         ))}
                        
                        </tbody>
                </table>
            </div>
           
        </div>
        
    </div>
</div>
              {/* <div className="row">
                <div
                  className="col-lg-6 mb-4"
                  style={{display: 'block', width: '100%'}}
                >
                  <div className="card shadow mb-4"></div>
                  <div className="card shadow mb-4" style={{width: '100%'}}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item" style={{fontSize: "18px","fontFamily": "Assistant, sans-serif"}}>
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
                          <div className="col-auto">
                            <div className="form-check">
                              <input
                                id="formCheck-1"
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="formCheck-1"
                              >
                                Activo
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item" style={{fontSize: "16px","fontFamily": "Assistant, sans-serif"}}>
                      {displayInventory.map((inventory) => (
                        <div className="row align-items-center no-gutters" key={inventory.id_inventory}>
                          <div className="col me-2">
                            <p>{inventory.id_inventory}</p>
                          </div>
                          <div className="col">
                            <picture>
                              <img src={inventory.image[0]} alt="imagen" style={{"width": "30%", "height": "auto"}} />
                            </picture>
                          </div>
                          <div className="col me-2">
                            <p>{inventory.article_name}</p>
                          </div>
                          <div className="col me-2">
                            <p>Referencia</p>
                          </div>
                          <div className="col me-2">
                            <p>Categoria</p>
                          </div>
                          <div className="col me-2">
                            <p>{inventory.selling_price}</p>
                          </div>
                          <div className="col me-2">
                            <p>{inventory.stock}</p>
                          </div>
                          <div className="col me-2">
                            <p>{inventory.status}</p>
                          </div>
                            
                       
                        </div>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
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
