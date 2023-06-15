import React, { useEffect, useContext } from 'react';

import { AuthContext } from "../../context/auth-context";

import './ChangePassword.css';

const ChangePassword = (props) => {

    const { authenticated } = useContext(AuthContext);

    useEffect(() => {
        return () => { console.log("cockpit.js cleanup work in useEffect"); };
    }, []); // will only execute once after component rendered

    return (
        <div>
            <h2>Change Password</h2>
            <div className="row">
                {authenticated && (
                    <div className="col-xs-12 col-sm-10 col-md-3">
                        <form>
                            <div id="login-data">
                                <div className="form-group">
                                    <label for="currentpassword">Current password</label>
                                    <input type="text"
                                        id="currentpassword"
                                        placeholder="Please enter Current Password"
                                        className="form-control"
                                        formControlName="currentpassword"
                                        required />
                                    {/* <span className="help-block" *ngIf="currentpassword.invalid && (currentpassword.dirty || currentpassword.touched)">Current password is required</span> */}
                                </div>
                                <div className="form-group">
                                    <label for="newpassword">New password</label>
                                    <input type="password"
                                        id="newpassword"
                                        placeholder="Please enter New Password"
                                        className="form-control"
                                        formControlName="newpassword"
                                        required />
                                    {/* <span className="help-block" *ngIf="newpassword.invalid && (newpassword.dirty || newpassword.touched)">New password is required</span> */}
                                </div>
                                <div className="form-group">
                                    <label for="confirmpassword">Confirm New password</label>
                                    <input type="password"
                                        id="confirmpassword"
                                        placeholder="Plase enter Confirm New Password"
                                        className="form-control"
                                        formControlName="confirmpassword"
                                        required />
                                    {/* <span class="help-block" *ngIf="confirmpassword.invalid && (confirmpassword.dirty || confirmpassword.touched)">Confirm New password is required</span>
                                <span class="help-block" *ngIf="passwordMatchError">Password does not match</span>*/}
                                </div>
                                <div className="form-group">
                                    <div className="row pull-right">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                {!authenticated && (
                    <div className="col-md-3 offset-md-6">
                        <h1>Unauthorized</h1>
                    </div>
                )}

            </div>
        </div>

    );

};

export default ChangePassword;