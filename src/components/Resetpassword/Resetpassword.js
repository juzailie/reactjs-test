import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Resetpassword.css';

class Resetpassword extends Component {

    render(){
      return (
            <div>
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <form>
                            <div id="user-data">
                                <div className="form-group">
                                    <label>Reset Password</label>
                                    <input type="text" id="username" placeholder="UserName" className="form-control"/>
                                    <span className="help-block">Username is required</span>
                                </div>
                                <div className="form-group">
                                    <div className="row pull-left">
                                        <div className="col-md-12">
                                            <NavLink className={"btn btn-link forgot-password"} to="/login" exact>Back to login</NavLink>
                                        </div>
                                    </div>
                                    <div className="row pull-right">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-danger">Reset Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <div className="alert alert-success">
                            Password reset success!<br/><br/>
                            {/* This is your new temporary password : <b>{{ temporaryPassword }}</b> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <div className="alert alert-danger">
                            Account not found, reset password failed
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  
  }
  
  export default Resetpassword;