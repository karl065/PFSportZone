import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import {useSelector, useDispatch} from 'react-redux';
import Sidebar from '../../Components/SideBar/Sidebar';
import { filterUsersByRoleAndStatus} from '../../redux/actions/actions';

library.add(fas);
const AdminUsers = () => {
  const users = useSelector((state) => state.app.users);
  const [roleSeleccionado, setRoleSeleccionado] = useState('');
  const [statusSeleccionado, setStatusSeleccionado] = useState('');
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(8);
  const pageCount = users.length / amountPerPage;
  const dispatch = useDispatch();

  const handleRoleChange = (event) => {
    setRoleSeleccionado(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusSeleccionado(event.target.value);
  }

  useEffect(() => {
    if (roleSeleccionado && statusSeleccionado) {
      dispatch(filterUsersByRoleAndStatus(roleSeleccionado,statusSeleccionado))
      setPage(1);
    }
  }, [roleSeleccionado, statusSeleccionado]);


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
                <h3 className="text-dark mb-0">Usuarios</h3>
                <div>
                  <select value={roleSeleccionado} style={{height: '38px', marginTop: '10px'}} onChange={handleRoleChange}>
                    <option defaultValue="Cliente">Filtrar por role</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Empleados">Empleados</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <select value={statusSeleccionado} style={{height: '38px', marginTop: '10px'}} onChange={handleStatusChange}>
                    <option defaultValue="true">Filtrar por estado</option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
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
                              
                              <td>{users.email}</td>
                              <td>{users.user}</td>
                              <td>{users.password}</td>
                              <td>{users.role}</td>
                             
                              {users.userStatus ? (
                                <td>Activo</td>
                              ) : (
                                <td>Inactivo</td>
                              )}
                             <td>
                              <FontAwesomeIcon icon="pencil-square" />
                                
                              </td>
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
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};
export default AdminUsers;