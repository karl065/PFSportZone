import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {Form} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import {useSelector} from 'react-redux';
import Sidebar from '../../Components/SideBar/Sidebar';

library.add(fas);
const AdminUsers = () => {
  const users = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(8);
  const pageCount = users.length / amountPerPage;


  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <Sidebar />
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{flex: '1', flexGrow: '1'}}>
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
              </div>
              <div className="container-fluid">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 text-nowrap">
                        <div
                          id="dataTable_length"
                          className="dataTables_length"
                          aria-controls="dataTable"
                        >
                          <label className="form-label">
                            <select className="d-inline-block form-select form-select-sm">
                              <option defaultValue="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          id="dataTable_filter"
                          className="text-md-end dataTables_filter"
                        >
                          <label className="form-label">
                            <input
                              className="form-control form-control-sm"
                              type="search"
                              aria-controls="dataTable"
                              placeholder="Search"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="dataTable"
                      className="table-responsive table mt-2"
                      role="grid"
                      aria-describedby="dataTable_info"
                    >
                      <table
                        id="dataTable"
                        className="table my-0"
                        style={{
                          fontSize: '16px',
                          fontFamily: 'Assistant, sans-serif',
                        }}
                      >
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Tipo</th>
                            <th>Role</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                        {users.length ? (
                          users
                            .slice(
                              (page - 1) * amountPerPage,
                              (page - 1) * amountPerPage + amountPerPage
                            )
                            .map((users, index) => (
                              <tr key={index}>
                              <td>{users.idUser}</td>
                              {/* <td>
                                <img
                                  src={users.image[0]}
                                  alt={users.article_name}
                                  width={100}
                                />
                              </td> */}
                              <td>{users.email}</td>
                              <td>{users.user}</td>
                              <td>{users.password}</td>
                              <td>{users.role}</td>
                             
                              {users.userStatus ? (
                                <td>Activo</td>
                              ) : (
                                <td>Inactivo</td>
                              )}
                              {/* <td>
                                {' '}
                                
                                  <option value={inventory.status}>
                                    {users.status}
                                  </option>
                                  {statusOption.map((option, index) => (
                                    <option value={option} key={index}>
                                      {option}
                                    </option>
                                  ))}
                               
                              </td> */}
                            </tr>
                            ))
                        ) : (
                          <tr ><td>No results found...</td></tr>
                        )}
                        </tbody>
                      </table>
                      <Pagination page={page} setPage={setPage} pageCount={pageCount} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="content">
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
                            fontFamily: 'Assistant, sans-serif',
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
                        fontFamily: 'Assistant, sans-serif',
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
                            <div className="col me-2">
                            {user.userStatus ? (
                                <td>Activo</td>
                              ) : (
                                <td>Inactivo</td>
                              )}
                            
                            </div>
                          </div>
                        ))}
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
export default AdminUsers;
