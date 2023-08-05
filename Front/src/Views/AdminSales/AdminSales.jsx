import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/SideBar/Sidebar';
import { useEffect, useRef, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterUsersByRoleAndStatus,
  getSales,
} from "../../redux/actions/actions";

library.add(fas);
const AdminSales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.app.sales);
  const [displayedSales, setDisplayedUsers] = useState(sales);
  const searchInputRef = useRef(null);
  const debounceTimeout = useRef(null);

  const [roleSeleccionado, setRoleSeleccionado] = useState("");
  const [statusSeleccionado, setStatusSeleccionado] = useState("");
  const [statusOption, setStatusOption] = useState(["Pending", "In Progress", "Rejected", "Paid"]);
  const [userStatusOptions, setUserStatusOptions] = useState({});

  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(10);
  const pageCount = Math.ceil(displayedSales.length / amountPerPage);

  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    clearTimeout(debounceTimeout.current);
     debounceTimeout.current = setTimeout(() => {
      const filtered = sales.filter((sale) =>
        sale?.sale.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedUsers(filtered);
    }, 500);
  };

  const applyFilters = () => {
    if (roleSeleccionado || statusSeleccionado) {
      dispatch(
        filterUsersByRoleAndStatus(roleSeleccionado, statusSeleccionado)
      );
    } else {
      dispatch(getSales());
    }
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setRoleSeleccionado(value);
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setStatusSeleccionado(value);
  };

  const statusSubmit = (e, idUser) => {
    e.preventDefault();
    if (e.target.value === "Inactivo") {
      if (roleSeleccionado || statusSeleccionado) {
        dispatch(
          updateUsersStatus(
            idUser,
            { userStatus: false },
            roleSeleccionado,
            statusSeleccionado
          )
        );
      } else {
        dispatch(updateUsersStatus(idUser, { userStatus: false }));
      }
    } else if (e.target.value === "Activo") {
      if (roleSeleccionado || statusSeleccionado) {
        dispatch(
          updateUsersStatus(
            idUser,
            { userStatus: true },
            roleSeleccionado,
            statusSeleccionado
          )
        );
      } else {
        dispatch(updateUsersStatus(idUser, { userStatus: true }));
      }
    }
  };

  useEffect(() => {
    applyFilters();
  }, [roleSeleccionado, statusSeleccionado]);

  useEffect(() => {
    // Populate userStatusOptions with initial user statuses
    const initialStatusOptions = {};
    sales.forEach((sale) => {
      initialStatusOptions[sales.id_sale] = sale.status
        ? "Activo"
        : "Inactivo";
    });
    setUserStatusOptions(initialStatusOptions);
    // * Cuando se realize el filtro de actualize con los "nuevos" usuarios.
    setDisplayedUsers(sales);
  }, [sales]);
  
  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <Sidebar />
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{flex: '1', flexGrow: '1'}}
        >
         <div id="content">
            <div className="container-fluid" style={{ display: "block" }}>
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-4">Pagos</h3>
                <div>
                  <select
                    // value={roleSeleccionado}
                    style={{ height: "38px", marginTop: "10px" }}
                    onChange={handleRoleChange}
                  >
                    <option value="">Filtrar por role</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Empleados">Empleados</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <select
                    // value={statusSeleccionado}
                    style={{ height: "38px", marginTop: "10px" }}
                    onChange={handleStatusChange}
                  >
                    <option value="">Filtrar por estado</option>
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
                        <select className="d-inline-block form-select form-select-sm"
                         onChange={(e) =>
                          setAmountPerPage(Number(e.target.value))
                        }
                        >
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
                        <th>Codigo Recep</th>
                        <th>Fecha</th>
                        <th>Impuestos</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Id Usuario</th>
                      </tr>
                    </thead>
                    <tbody>
                    {displayedSales.length ? (
                            displayedSales
                              .slice(
                                (page - 1) * amountPerPage,
                                page * amountPerPage
                              )
                              .map((sales, index) => (
                                
                                <tr key={index}>
                                  <td>{sales.id_sales}</td>
                                  <td>{sales.receipt_code}</td>
                                  <td>{sales.date}</td>
                                  <td>{sales.tax}</td>
                                  <td>{sales.total_amount}</td>
                                  <td>{sales.status}</td>
                                  <td>{sales.id_usuarios}</td>
                                  <td>
                                    <select
                                      className="d-inline-block form-select form-select-sm"
                                      value={userStatusOptions[sales.id_sales]}
                                      onChange={(e) =>
                                        statusSubmit(e, sales.id_sales)
                                      }
                                    >
                                      {statusOption.map((option, index) => (
                                        <option value={option} key={index}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                  <td>
                                  <Link to="/adminEditUser">
                                      <FontAwesomeIcon
                                        icon="pencil-square"
                                        onClick={() =>
                                          handleEditUser(
                                            sales
                                          )
                                        }
                                      />
                                    </Link>
                                  </td>
                                </tr>
                              ))
                          ) : (
                            <tr>
                              <td>No results found...</td>
                            </tr>
                          )}
                    </tbody>
                  </table>
                  {displayedSales.length > amountPerPage && (
                        <Pagination
                          page={page}
                          setPage={setPage}
                          pageCount={pageCount}
                        />
                      )}
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

export default AdminSales;
