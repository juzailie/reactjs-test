import React, { useContext, useState } from 'react';

import { AuthContext } from "../../context/auth-context";
import { Redirect } from 'react-router-dom';
import UserService from '../../Services/UserService';

import './ChangePassword.css';

const ChangePassword = (props) => {

    const { authenticated, userid } = useContext(AuthContext);

    const [currentpwd, setCurrentpwd] = useState('');
    const [newpwd, setNewpwd] = useState('');
    const [newconfirmpwd, setNewconfirmpwd] = useState('');

    const [errorCurrentpwd, setErrorCurrentpwd] = useState('');
    const [errorNewpwd, setErrorNewpwd] = useState('');
    const [errorNewconfirmpwd, setErrorNewconfirmpwd] = useState('');
    const [errorPasswordNotSame, setErrorPasswordNotSame] = useState('');

    let isvalid = false;

    const handleSubmit = (e) => {

        e.preventDefault();

        isvalid = true;

        if (currentpwd.trim() === '') {
            setErrorCurrentpwd('Current password is required.');
            isvalid = false;
        }

        if (newpwd.trim() === '') {
            setErrorNewpwd('New password is required.');
            isvalid = false;
        }

        if (newconfirmpwd.trim() === '') {
            setErrorNewconfirmpwd('Confirm New password is required.');
            isvalid = false;
        }

        if (newpwd !== newconfirmpwd) {
            setErrorPasswordNotSame('New Password and Confirm New Password is not same.');
            isvalid = false;
        }

        if (isvalid === true) {
            // clear error messages
            setErrorCurrentpwd('');
            setErrorNewpwd('');
            setErrorNewconfirmpwd('');
            setErrorPasswordNotSame('');

            if (userid) {

                var request = {
                    currentpassword: currentpwd,
                    newpassword: newpwd,
                    comfirmpassword: newconfirmpwd
                };

                // change user password
                UserService.changeuserpassword(userid, request)
                    .then((response) => {

                        let data = response.data;

                        console.log("changeuserpassword ", data);

                        if (response.status === 200) {
                            if (data) {
                                alert("Password change successfully!");
                            } else {
                                alert("Password change failed!");
                            }
                        } else if (response.status === 404) {
                            alert("Password change failed!");
                        }

                    });
            }

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'currentpassword') {
            setCurrentpwd(value);
        }

        if (name === 'newpassword') {
            setNewpwd(value);
            console.log("newpwd ", newpwd, value);

            setErrorPasswordNotSame('');
            if (value !== newconfirmpwd) {
                setErrorPasswordNotSame('New Password and Confirm New Password is not same.');
            }
        }

        if (name === 'confirmpassword') {
            setNewconfirmpwd(value);
            console.log("newconfirmpwd ", newconfirmpwd, value);

            setErrorPasswordNotSame('');
            if (value !== newpwd) {
                setErrorPasswordNotSame('New Password and Confirm New Password is not same.');
            }
        }

        setErrorCurrentpwd('');
        if (name === 'currentpassword' && value.trim() === '') {
            setErrorCurrentpwd('Current Password is required.');
        }

        setErrorNewpwd('');
        if (name === 'newpassword' && value.trim() === '') {
            setErrorNewpwd('New Password is required.');
        }

        setErrorNewconfirmpwd('');
        if (name === 'confirmpassword' && value.trim() === '') {
            setErrorNewconfirmpwd('Confirm New Password is required.');
        }
      
    };

    return (
        <div>
            <h2>Change Password</h2>
            <div className="row">
                {authenticated && (
                    <div className="col-xs-12 col-sm-10 col-md-3">
                        <form onSubmit={handleSubmit}>
                            <div id="login-data">
                                <div className="form-group">
                                    <label for="currentpassword">Current password</label>
                                    <input type="text"
                                        name="currentpassword"
                                        placeholder="Please enter Current Password"
                                        className={`form-control ${errorCurrentpwd && 'is-invalid'}`}
                                        value={currentpwd}
                                        onChange={handleChange}
                                    />
                                    <span className="invalid-feedback">{errorCurrentpwd}</span>
                                </div>
                                <div className="form-group">
                                    <label for="newpassword">New password</label>
                                    <input type="password"
                                        name="newpassword"
                                        placeholder="Please enter New Password"
                                        className={`form-control ${errorNewpwd && 'is-invalid'}`}
                                        value={newpwd} onChange={handleChange}
                                    />
                                    <span className="invalid-feedback">{errorNewpwd}</span>

                                </div>
                                <div className="form-group">
                                    <label for="confirmpassword">Confirm New password</label>
                                    <input type="password"
                                        name="confirmpassword"
                                        placeholder="Plase enter Confirm New Password"
                                        className={`form-control ${(errorNewconfirmpwd || errorPasswordNotSame) && 'is-invalid'}`}
                                        formControlName="confirmpassword"
                                        value={newconfirmpwd} onChange={handleChange}
                                    />
                                    <span className="invalid-feedback">{errorNewconfirmpwd}</span>
                                    <span className="invalid-feedback">{errorPasswordNotSame}</span>
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
                    <Redirect to="/unauthorized" />
                )}

            </div>

        </div>
    );

};

export default ChangePassword;