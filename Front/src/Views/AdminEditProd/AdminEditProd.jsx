import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {getInventory} from '../../redux/actions/actions';

library.add(fas);
const AdminEditProd = () => {

  
  
  const dispatch = useDispatch();
  const displayInventory = useSelector((state) => state.displayInventory);
  useEffect(() => {
    dispatch(getInventory());
  }, []);

//solo se usa para el cambio de pestaña
  const [activeTab, setActiveTab] = useState('tab-1');
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
 

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(displayInventory);
  const [selectedItem, setSelectedItem] = useState('');


  
 

  const handleSearch = (event) => {
    //const searchTerm = event.target.value;
    setSearchTerm(event.target.value);

    const filteredData = displayInventory.filter(item =>
      item.article_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    
  };



  const handleItemClick = (item) => {
    setSelectedItem(item);
    
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (data.length > 0) {
        setSelectedItem(data[0]);
        setData([data[0]]);
        
      }
    }
  };
 
  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <nav
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
          style={{
            background: 'rgb(116,153,0)',
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
            <hr className="sidebar-divider my-1" />
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
              <hr className="sidebar-divider my-2" />
              <li className="nav-item">
              <Link to="/adminUsers">
                  <FontAwesomeIcon icon="user" />
                  <span> Usuarios</span>
                </Link>
              </li>
              <hr className="sidebar-divider my-2" />
              <li className="nav-item">
                <Link to="/adminNewUser">
                  <FontAwesomeIcon icon="user" />
                  <span> Crear Usuario</span>
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
              <li className="nav-item" style={{"color": "var(--bs-gray-dark)"}}>
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
        <div className="d-flex flex-column" id="content-wrapper" style={{flex: '1', flexGrow: '1'}}>
        <div className="card shadow mb-5" style={{height: "500px"}}>
    <div className="card-header py-3">
       
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"> <h4 className="text-dark mb-4">Editar Producto</h4></div>
                    <div className="col-md-4 col-xl-4" >
                        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"  style={{fontSize: "16px","fontFamily": "Assistant, sans-serif"}}>
                            <div className="input-group">
                              <input className="bg-light form-control border-1 small" 
                              type="text"  
                              value={searchTerm}
                              onChange={handleSearch}
                              
                              onKeyDown={handleKeyPress}
                              list="search-results"
                              placeholder="Search for ..." />
                              
                              <button className="btn btn-primary py-0" type="button"  style={{"background": "rgb(116,153,0)"}}>
                              <FontAwesomeIcon icon="fa-search" />
                              </button>
                             
                              </div>
                              <datalist id="search-results">
        {data.map(item => (
          <option key={item.id_inventory} value={item.article_name} />
        ))}
      </datalist>
      <ul className="list-group">
        {data.map(item => (
          <li
            className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
            key={item.id_inventory}
            onClick={() => handleItemClick(item)}
            style={{"background": "rgb(116,153,0)"}}
          >
            {item.article_name}
          </li>
        ))}
      </ul> 
                        </form>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <div className="card-body" style={{height: "300px"}}>
        <div className="row">
            <div className="col" style={{height: "430px"}}>
                <div>
                    <ul className="nav nav-tabs" role="tablist">
<li className="nav-item" role="presentation"><button className={`nav-link ${activeTab === "tab-1" ? "active" : ""}`} role="tab" onClick={() => handleTabClick("tab-1")} style={{"color": "rgb(116,153,0)"}}>DESCRIPCION</button></li>
<li className="nav-item" role="presentation"><button className={`nav-link ${activeTab === "tab-2" ? "active" : ""}`} role="tab" onClick={() => handleTabClick("tab-2")} style={{"color": "rgb(116,153,0)"}}>DATOS</button></li>
<li className="nav-item" role="presentation"><button className={`nav-link ${activeTab === "tab-3" ? "active" : ""}`} role="tab" onClick={() => handleTabClick("tab-3")} style={{"color": "rgb(116,153,0)"}}>EXISTENCIAS</button></li>
<li className="nav-item" role="presentation"><button className={`nav-link ${activeTab === "tab-4" ? "active" : ""}`} role="tab" onClick={() => handleTabClick("tab-4")} style={{"color": "rgb(116,153,0)"}}>TRANSPORTE</button></li>
<li className="nav-item" role="presentation"><button className={`nav-link ${activeTab === "tab-5" ? "active" : ""}`} role="tab" onClick={() => handleTabClick("tab-5")} style={{"color": "rgb(116,153,0)"}}>PRECIO</button></li>
                    </ul>
                    <div className="tab-content" style={{height: "390px" }}> 
                        <div id="tab-1" className={`tab-pane ${activeTab === "tab-1" ? "active" : ""}`} role="tabpanel" style={{ height: "380px", fontFamily: "Assistant, sans-serif"}}>
                            <p>Descripcion</p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col" style={{textAlign: "center"}}>
                                        <p>Codigo</p><input type="text" defaultValue={selectedItem.id_inventory} />
                                    </div>
                                    <div className="col" style={{textAlign: "center"}}>
                                        <p>Nombre</p><input type="text"  defaultValue={selectedItem.article_name} />
                                    </div>
                                    <div className="col">
                                        <div></div>
                                    </div>
                                    <div className="col">
                                        <div></div>
                                        <div className="form-check"><input id="formCheck-3" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-3">Label</label></div>
                                    </div>
                                    <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                        <div className="form-check form-switch"><input id="formCheck-6" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-6" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{textAlign: "center"}}>
                                        <p>Estado</p><input type="text" defaultValue={selectedItem.status}  />
                                    </div>
                                    <div className="col" style={{textAlign: "center"}}>
                                        <p>Sumar o restar elementos</p><input type="text" />
                                    </div>
                                    <div className="col">
                                        <div></div>
                                    </div>
                                    <div className="col">
                                        <div></div>
                                        <div className="form-check"><input id="formCheck-5" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-5">Label</label></div>
                                    </div>
                                    <div className="col-md-6" style={{"textAlign": "center","width": "200px"}}>
                                        <div className="form-check form-switch"><input id="formCheck-2" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-2" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{textAlign:"center"}}>
                                        <p>Editar Cantidad</p>
                                        <div><textarea style={{width: "100%"}} defaultValue={selectedItem.description} ></textarea></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div id="tab-2" className={`tab-pane ${activeTab === "tab-2" ? "active" : ""}`} role="tabpanel" style={{ height: "380px", fontFamily: "Assistant, sans-serif" }}>
                            <p>Datos</p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col" style={{textAlign:"center"}}>
                                        <p>Precio de Venta</p><input type="text" defaultValue={selectedItem.selling_price} />
                                    </div>
                                    <div className="col" style={{textAlign:"center"}}>
                                        <p>Precio de Compra</p><input type="text"  defaultValue={selectedItem.purchase_price} />
                                    </div>
                                    <div className="col">
                                        <div>
                                            <p>Sumar</p><select style={{height: "30px"}}>
                                                <optgroup label="This is a group">
                                                    <option defaultValue="12">This is item 1</option>
                                                    <option value="13">This is item 2</option>
                                                    <option value="14">This is item 3</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div></div>
                                    </div>
                                    <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="tab-3" className={`tab-pane ${activeTab === "tab-3" ? "active" : ""}`} role="tabpanel" style={{ height: "380px", fontFamily: "Assistant, sans-serif" }}>
                            <p>Existencias</p>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Stock</p><input type="text" defaultValue={selectedItem.stock}  />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-14" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-14">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-15" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-15" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Editar Cantidad</p><input type="text" />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-16" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-16">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-17" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-17" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div id="tab-4" className={`tab-pane ${activeTab === "tab-4" ? "active" : ""}`} role="tabpanel" style={{ height: "380px", fontFamily: "Assistant, sans-serif" }}>
                            <p>Transporte</p>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Editar Cantidad</p><input type="text" />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-10" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-10">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-11" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-11" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Editar Cantidad</p><input type="text" />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-12" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-12">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-13" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-13" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div id="tab-5" className={`tab-pane ${activeTab === "tab-5" ? "active" : ""}`} role="tabpanel" style={{ height: "380px", fontFamily: "Assistant, sans-serif" }}>
                            <p>Precio</p>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Editar Cantidad</p><input type="text" />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-4" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-4">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-7" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-7" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Editar Cantidad</p><input type="text" />
                                        </div>
                                        <div className="col" style={{textAlign:"center"}}>
                                            <p>Sumar o restar elementos</p><input type="text" />
                                        </div>
                                        <div className="col">
                                            <div></div>
                                        </div>
                                        <div className="col">
                                            <div></div>
                                            <div className="form-check"><input id="formCheck-8" className="form-check-input" type="checkbox" /><label className="form-check-label" htmlFor="formCheck-8">Label</label></div>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "center",width: "200px"}}>
                                            <div className="form-check form-switch"><input id="formCheck-9" className="form-check-input" type="checkbox" /><label className="form-check-label"  htmlFor="formCheck-9" style={{marginTop: "25px"}}><strong>Notify me about new replies</strong></label></div>
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
    <div style={{height: "50px"}}>
        <div className="row">
            <div className="col" style={{textAlign: "center"}}>
                <div></div>
            </div>
            <div className="col">
                <div><button className="btn btn-success btn-sm" type="submit" style={{textAlign: "center",fontSize: "18px",color: "var(--bs-body-bg)",background: "rgb(116,153,0)"}}>Actualizar</button></div>
            </div>
            <div className="col">
                <div><button className="btn btn-success btn-sm" type="submit" style={{textAlign: "center",fontSize: "18px",color: "var(--bs-body-bg)",background: "rgb(116,153,0)"}}>Guardar</button></div>
            </div>
            <div className="col-md-6" style={{textAlign: "center",width: "200px"}}><button className="btn btn-success btn-sm" type="submit" style={{color: "var(--bs-body-bg)",fontSize: "18px",textAlign: "center",background: "rgb(116,153,0)"}}>Eliminar</button></div>
        </div>
    </div>
</div>
          {/* <div id="content">
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
          </div> */}
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};

export default AdminEditProd;
