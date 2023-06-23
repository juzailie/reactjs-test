import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Resetpassword.css';
import UserService from '../../Services/UserService';

const Resetpassword = () => {

    const [username, setUsername] = useState('');
    const [temppassword, settemppassword] = useState('');
    const [resetpasswordresult, setresetpasswordresult] = useState('');
    const [submited, setsubmited] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        setsubmited(true);

        if (username.trim() === '') {

            setError('Username is required.');

        } else {

            // clear error messages
            setError('');

            // reset user password
            UserService.resetpassword(username)
                .then((response) => {
                    let data = response.data;
                    if (response.status === 200) {
                        settemppassword(data.temporarypassword);
                        setresetpasswordresult(true);
                    } else if (response.status === 404) {
                        setresetpasswordresult(false);
                    }
                });
        }

    }

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        
        console.log("handleChange", [name, value]);

        if (name === 'username'){
            setUsername(value);
        }

        setError('');
        if (name === 'username' && value.trim() === '') {
            setError('Username is required.');
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-3 offset-md-5">
                    <form onSubmit={handleSubmit}>
                        <div id="user-data">
                            <div className="form-group">
                                <label>Reset Password</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    placeholder="username" 
                                    className={`form-control ${error && 'is-invalid'}`}
                                    value={username} 
                                    onChange={handleChange} />
                                <span className="invalid-feedback">{error}</span>
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

            <br />

            {resetpasswordresult && submited && (
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <div className="alert alert-success">
                            Password reset success!<br /><br />
                            This is your new temporary password : <b>{temppassword}</b>
                        </div>
                    </div>
                </div>
            )}

            {!resetpasswordresult && submited && error === '' && (
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <div className="alert alert-danger">
                            Account not found, reset password failed
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

}

export default Resetpassword;