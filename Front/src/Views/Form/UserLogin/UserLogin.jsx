import React from "react";
import { useState } from "react";

const UserLogin = ({ login }) => {
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });

    const [errors,setErrors] = useState({
        email:"",
        password:"",

    })
 

  const handlerChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    if (event.target.name === "email" && !/\S+@\S+\.\S+/.test(event.target.value)) {
      setErrors({
        ...errors,
        email: "No es un email correcto"
      });
    } else {
      setErrors({
        ...errors,
        email: ""
      });
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
   
    const { email, password } = userData;
    //console.log("email:", email);
   // console.log("password:", password);
    setUserData({
        ...userData,
        "email": email,"password": password
    })
    login(userData);
  };

  return <div>
    <div id="ng-login" className="bg-gradient-primary" style={{"background": "#42b73a","--bs-success": "#42b73a"}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10" style={{"width": "400px"}}>
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6" style={{"borderRadius": "10px","borderColor": "rgba(133,135,150,0)","width": "400px"}}>
                                <div className="p-5" style={{"width": "100%"}}>
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4" style={{"fontSize": "30px"}}>Bienvenido!</h4>
                                    </div>
                                    <form className="user">
                                        <div className="mb-3"><input id="correo" className="form-control form-control-user" type="text" value={userData.email} onChange={handlerChange} aria-describedby="emailHelp" placeholder="Usuario..." name="correo" style={{"borderRadius": "0px"}} /></div>
                                        <div className="mb-3"><input id="exampleInputPassword" className="form-control form-control-user"  value={userData.password}  onChange={handlerChange} type="current-password" placeholder="Password" name="password" style={{"borderRadius": "0px"}} /></div>
                                        <div className="mb-3">
                                            <div className="custom-control custom-checkbox small">
                                                <hr />
                                            </div>
                                        </div><button id="registrarse" className="btn btn-success fs-5 link-light d-block btn-user w-100" disabled={errors.email ||  errors.password} type="submit" style={{"background": "#42b73a","borderRadius": "0px"}}>Login</button>
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
</div>
  </div>;
};

export default UserLogin;
