import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import AuthContext from "../../context/auth-context";

const Login = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        return () => { console.log("cockpit.js cleanup work in useEffect");  };
    }, []); // will only execute once after component rendered

    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-1 col-md-offset-3">
                    <center><span>Sign in to start your session</span></center>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-1 col-md-offset-3">
                    <form>
                        <div id="login-data">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" 
                                    id="username" 
                                    placeholder="UserName" 
                                    className="form-control" 
                                    required />
                                {/* <span class="help-block">Username is required</span> */}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    className="form-control" 
                                    required />
                                {/* <span class="help-block" >Password is required</span> */}
                            </div>
                            <div className="form-group">
                                <div className="row pull-left">
                                    <div className="col-md-12">
                                        <NavLink className={"btn btn-link forgot-password"} to="/forgotpwd" exact>I forgot my password</NavLink>
                                    </div>
                                </div>
                                <div className="row pull-right">
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-danger" onClick={authContext.login}>Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  
};
  
export default React.memo(Login);