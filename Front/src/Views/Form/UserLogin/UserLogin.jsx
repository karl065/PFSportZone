import React from "react";

const UserLogin = () => {
  return <div>
    <body id="ng-login" className="bg-gradient-primary" style={{"background": "#42b73a","--bs-success": "#42b73a"}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10" style={{"width": "400px"}}>
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6" style={{"border-radius": "10px","border-color": "rgba(133,135,150,0)","width": "400px"}}>
                                <div className="p-5" style={{"width": "100%","background": "url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png')"}}>
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4" style={{"font-size": "30px"}}>Bienvenido!</h4>
                                    </div>
                                    <form className="user">
                                        <div className="mb-3"><input id="correo" className="form-control form-control-user" type="text" aria-describedby="emailHelp" placeholder="Usuario..." name="correo" style={{"border-radius": "0px"}} /></div>
                                        <div className="mb-3"><input id="exampleInputPassword" className="form-control form-control-user" type="password" placeholder="Password" name="password" style={{"border-radius": "0px"}} /></div>
                                        <div className="mb-3">
                                            <div className="custom-control custom-checkbox small">
                                                <hr />
                                            </div>
                                        </div><button id="registrarse" className="btn btn-success fs-5 link-light d-block btn-user w-100" type="submit" style={{"background": "#42b73a","border-radius": "0px"}}>Login</button>
                                        <hr />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
  </div>;
};

export default UserLogin;
