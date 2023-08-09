/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../Components/Pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../Components/SideBar/Sidebar";
import {
  editProduct,
  filterProductsByStatus,
  getProductById,
} from "../../redux/actions/actions";
import { Link } from "react-router-dom";

library.add(fas);

const AdminProducts = () => {
  const inventario = useSelector((state) => state.app.inventory);
  const [statusSeleccionado, setStatusSeleccionado] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(inventario);
  const searchInputRef = useRef(null);
  const debounceTimeout = useRef(null);

  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(10);
  const pageCount = Math.ceil(displayedProducts.length / amountPerPage);
  const [statusOption, setStatusOption] = useState([
    "Available",
    "Not Available",
    "Discontinued",
  ]);
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    const { value } = e.target;
    dispatch(filterProductsByStatus(value));
    setStatusSeleccionado(value);
  };

  const handleEditProduct = (productId) => {
    dispatch(getProductById(productId));
  };

  const statusSubmit = (e, id_inventory) => {
    e.preventDefault();
    if (statusSeleccionado) {
      dispatch(
        editProduct(
          { id_inventory, status: e.target.value },
          statusSeleccionado
        )
      );
    } else {
      dispatch(editProduct({ id_inventory, status: e.target.value }));
    }
  };

  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    clearTimeout(debounceTimeout.current);

    // * Debounce => Luego de que el input cambie y pasen 500 ms sin escribir se realiza el filtrado
    debounceTimeout.current = setTimeout(() => {
      const filtered = inventario.filter((product) =>
        product.article_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedProducts(filtered);
    }, 500);
  };

  // * Cuando se realize el filtro de actualize con el "nuevo" inventario.
  useEffect(() => {
    setDisplayedProducts(inventario);
  }, [inventario]);

  return (
    <div>
      <div id="wrapper" style={{ display: "flex" }}>
        <Sidebar />
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{ flex: "1", flexGrow: "1" }}
        >
          <div id="content">
            <div className="container-fluid" style={{ display: "block" }}>
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Productos</h3>
                <div>
                  <select
                    value={statusSeleccionado}
                    onChange={handleStatusChange}
                    style={{ height: "38px", marginTop: "10px" }}
                  >
                    <option value="">Filtrar por</option>
                    {statusOption.map((option, index) => (
                      <option value={option} key={index}>
                        {option}
                      </option>
                    ))}
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
                            <select
                              className="d-inline-block form-select form-select-sm"
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
                              onChange={handleChange}
                              ref={searchInputRef}
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
                          fontSize: "16px",
                          fontFamily: "Assistant, sans-serif",
                        }}
                      >
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Venta P</th>
                            <th>Compra P</th>
                            <th>Stock</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {displayedProducts.length ? (
                            displayedProducts
                              .slice(
                                (page - 1) * amountPerPage,
                                page * amountPerPage
                              )
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
                                  <td>{inventory.purchase_price}</td>
                                  <td>{inventory.stock}</td>
                                  <td>{inventory.description}</td>
                                  <td>
                                    {inventory.categorias
                                      ? inventory.categorias.categoryName
                                      : "categoria"}
                                  </td>
                                  <td>
                                    <select
                                      className="d-inline-block form-select form-select-sm"
                                      value={inventory.status}
                                      onChange={(e) =>
                                        statusSubmit(e, inventory.id_inventory)
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
                                    <Link to="/adminEditProd">
                                      <FontAwesomeIcon
                                        icon="pencil-square"
                                        onClick={() =>
                                          handleEditProduct(
                                            inventory.id_inventory
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
                      {displayedProducts.length > amountPerPage && (
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

export default AdminProducts;
