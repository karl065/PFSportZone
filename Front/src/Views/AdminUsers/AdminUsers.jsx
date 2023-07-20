import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);
const AdminUsers = () => {
  return (
    <div>
      <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid"><button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle me-3" type="button"><i className="fas fa-bars"></i></button>
                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                </form>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="me-auto navbar-search w-100">
                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                        <p>A new monthly report is ready to download!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                        <p>$290.29 has been deposited into your account!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                        <p>Spending Alert: We&#39;ve noticed unusually high spending for your account.</p>
                                    </div>
                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar4.jpeg" />
                                        <div className="bg-success status-indicator"></div>
                                    </div>
                                    <div className="fw-bold">
                                        <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I&#39;ve been having.</span></div>
                                        <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar2.jpeg" />
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div className="fw-bold">
                                        <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                        <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar3.jpeg" />
                                        <div className="bg-warning status-indicator"></div>
                                    </div>
                                    <div className="fw-bold">
                                        <div className="text-truncate"><span>Last month&#39;s report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                        <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar5.jpeg" />
                                        <div className="bg-success status-indicator"></div>
                                    </div>
                                    <div className="fw-bold">
                                        <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren&#39;t good...</span></div>
                                        <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                    </div>
                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </div>
                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                    </li>
                    <div className="d-none d-sm-block topbar-divider"></div>
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="avatars/avatar1.jpeg" /></a>
                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i> Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i> Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i> Activity log</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i> Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-primary py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col me-2">
                                    <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Earnings (monthly)</span></div>
                                    <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-success py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col me-2">
                                    <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Earnings (annual)</span></div>
                                    <div className="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-info py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col me-2">
                                    <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>Tasks</span></div>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-auto">
                                            <div className="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"><span className="visually-hidden">50%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col me-2">
                                    <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Pending Requests</span></div>
                                    <div className="text-dark fw-bold h5 mb-0"><span>18</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 col-xl-8">
                    <div className="card shadow mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
                            <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                    <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#"> Action</a><a className="dropdown-item" href="#"> Another action</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#"> Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-area"><canvas height="320" style="display: block; width: 448px; height: 320px;" width="448"></canvas></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                    <div className="card shadow mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
                            <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                    <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#"> Action</a><a className="dropdown-item" href="#"> Another action</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#"> Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-area"><canvas height="320" style="display: block; width: 448px; height: 320px;" width="448"></canvas></div>
                            <div className="text-center small mt-4"><span className="me-2"><i className="fas fa-circle text-primary"></i> Direct</span><span className="me-2"><i className="fas fa-circle text-success"></i> Social</span><span className="me-2"><i className="fas fa-circle text-info"></i> Refferal</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="text-primary fw-bold m-0">Projects</h6>
                        </div>
                        <div className="card-body">
                            <h4 className="small fw-bold">Server migration<span className="float-end">20%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"><span className="visually-hidden">20%</span></div>
                            </div>
                            <h4 className="small fw-bold">Sales tracking<span className="float-end">40%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"><span className="visually-hidden">40%</span></div>
                            </div>
                            <h4 className="small fw-bold">Customer Database<span className="float-end">60%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span className="visually-hidden">60%</span></div>
                            </div>
                            <h4 className="small fw-bold">Payout Details<span className="float-end">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span className="visually-hidden">80%</span></div>
                            </div>
                            <h4 className="small fw-bold">Account setup<span className="float-end">Complete!</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span className="visually-hidden">100%</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="text-primary fw-bold m-0">Todo List</h6>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check"><input id="formCheck-1" className="form-check-input" type="checkbox" /><label className="form-check-label" for="formCheck-1"></label></div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">11:30 AM</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check"><input id="formCheck-2" className="form-check-input" type="checkbox" /><label className="form-check-label" for="formCheck-2"></label></div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">12:30 AM</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check"><input id="formCheck-3" className="form-check-input" type="checkbox" /><label className="form-check-label" for="formCheck-3"></label></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-primary shadow">
                                <div className="card-body">
                                    <p className="m-0">Primary</p>
                                    <p className="text-white-50 small m-0">#4e73df</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-success shadow">
                                <div className="card-body">
                                    <p className="m-0">Success</p>
                                    <p className="text-white-50 small m-0">#1cc88a</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-info shadow">
                                <div className="card-body">
                                    <p className="m-0">Info</p>
                                    <p className="text-white-50 small m-0">#36b9cc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-warning shadow">
                                <div className="card-body">
                                    <p className="m-0">Warning</p>
                                    <p className="text-white-50 small m-0">#f6c23e</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-danger shadow">
                                <div className="card-body">
                                    <p className="m-0">Danger</p>
                                    <p className="text-white-50 small m-0">#e74a3b</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-secondary shadow">
                                <div className="card-body">
                                    <p className="m-0">Secondary</p>
                                    <p className="text-white-50 small m-0">#858796</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="bg-white sticky-footer">
        <div className="container my-auto">
            <div className="text-center my-auto copyright"><span>Copyright © Brand 2023</span></div>
        </div>
    </footer>
</div>
      </div>
  )
}

export default AdminUsers;