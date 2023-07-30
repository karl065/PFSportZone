import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../Components/Pagination/Pagination';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';
import Sidebar from '../../Components/SideBar/Sidebar';

library.add(fas);

const AdminProducts = () => {
  const inventario = useSelector((state) => state.app.inventory);
  const [statusSeleccionado, setStatusSeleccionado] = useState('');
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(8);

  const [statusOption, setStatusOption] = useState([
    'Available',
    'Not Available',
    'Discontinued',
  ]);


  const handleStatusChange = (e) => {
    const {value} = e.target;
    setStatusSeleccionado(value);
  };

  const filteredInventory =
    statusSeleccionado === 'Show All'
      ? inventario
      : statusSeleccionado === 'default'
      ? inventario
      : inventario.filter((item) => item.status === statusSeleccionado);
    const pageCount = inventario.length / amountPerPage;
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
            <div className="container-fluid" style={{display: 'block'}}>
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Productos</h3>
                <div>
                  <select value={statusSeleccionado}  onChange={handleStatusChange} style={{height: '38px', marginTop: '10px'}}>
                    <option value='default'>Filtrar por</option>
                    <option value="Show All">Todos</option>
                    <option value="Available">Disponible</option>
                    <option value="Not Available">No disponible</option>
                    <option value="Discontinued">Descontinuado</option>
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
                            <th>Codigo</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio de Venta</th>
                            <th>Stock</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                        {filteredInventory.length ? (
                            filteredInventory
                              .slice((page - 1) * amountPerPage, (page - 1) * amountPerPage + amountPerPage)
                              .map((inventory, index) => (
                                <tr key={index}>
                                  <td>{inventory.id_inventory}</td>
                                  <td>
                                    <img
                                      src={inventory.image[0]}
                                      alt={inventory.article_name}
                                      width={100}
                                    />
                                  </td>
                                  <td>{inventory.article_name}</td>
                                  <td>{inventory.selling_price}</td>
                                  <td>{inventory.stock}</td>
                                  <td>{inventory.description}</td>
                                  <td>
                                    {inventory.categorias
                                      ? inventory.categorias.categoryName
                                      : 'categoria'}
                                  </td>
                                  <td style={{"minWidth": "150px"}}><select className="d-inline-block form-select form-select-sm">
                                    {' '}
                                    <option value={inventory.status}>
                                        {inventory.status}
                                      </option>
                                      {statusOption.map((option, index) => (
                                        <option value={option} key={index}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                    </td>
                                  <td>
                                    <FontAwesomeIcon icon="pencil-square" />
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
                      <Pagination
                        page={page}
                        setPage={setPage}
                        pageCount={pageCount}
                      />
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

export default AdminProducts;
