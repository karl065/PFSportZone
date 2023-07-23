import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/SideBar/Sidebar';

library.add(fas);
const AdminPagos = () => {
  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        <Sidebar />
        <div
          className="d-flex flex-column"
          id="content-wrapper"
          style={{flex: '1', flexGrow: '1'}}
        >
          <div className="container-fluid">
            <h3 className="text-dark mb-4">Pagos</h3>
            <div className="card shadow">
              <div className="card-header py-3">
                <p
                  className="text-primary m-0 fw-bold"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Assistant, sans-serif',
                    '--bs-primary-rgb': 'rgb(116,153,0)',
                  }}
                >
                  Informacion de pagos
                </p>
              </div>
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
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td>Angelica Ramos</td>
                        <td>Chief Executive Officer(CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>
                          2009/10/09
                          <br />
                        </td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>
                          2009/01/12
                          <br />
                        </td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td>Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>
                          2012/10/13
                          <br />
                        </td>
                        <td>$132,000</td>
                      </tr>
                      <tr>
                        <td>Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>
                          2011/06/07
                          <br />
                        </td>
                        <td>$206,850</td>
                      </tr>
                      <tr>
                        <td>Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>
                          2012/12/02
                          <br />
                        </td>
                        <td>$372,000</td>
                      </tr>
                      <tr>
                        <td>
                          Bruno Nash
                          <br />
                        </td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>
                          2011/05/03
                          <br />
                        </td>
                        <td>$163,500</td>
                      </tr>
                      <tr>
                        <td>Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>
                          2011/12/12
                          <br />
                        </td>
                        <td>$106,450</td>
                      </tr>
                      <tr>
                        <td>Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>
                          2011/12/06
                          <br />
                        </td>
                        <td>$145,600</td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior JavaScript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>
                          2012/03/29
                          <br />
                        </td>
                        <td>$433,060</td>
                      </tr>
                      <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td>Angelica Ramos</td>
                        <td>Chief Executive Officer(CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>
                          2009/10/09
                          <br />
                        </td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>
                          2009/01/12
                          <br />
                        </td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td>Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>
                          2012/10/13
                          <br />
                        </td>
                        <td>$132,000</td>
                      </tr>
                      <tr>
                        <td>Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>
                          2011/06/07
                          <br />
                        </td>
                        <td>$206,850</td>
                      </tr>
                      <tr>
                        <td>Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>
                          2012/12/02
                          <br />
                        </td>
                        <td>$372,000</td>
                      </tr>
                      <tr>
                        <td>
                          Bruno Nash
                          <br />
                        </td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>
                          2011/05/03
                          <br />
                        </td>
                        <td>$163,500</td>
                      </tr>
                      <tr>
                        <td>Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>
                          2011/12/12
                          <br />
                        </td>
                        <td>$106,450</td>
                      </tr>
                      <tr>
                        <td>Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>
                          2011/12/06
                          <br />
                        </td>
                        <td>$145,600</td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior JavaScript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>
                          2012/03/29
                          <br />
                        </td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default AdminPagos;
