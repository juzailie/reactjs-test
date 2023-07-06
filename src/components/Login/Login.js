import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Login.css';
import { AuthContext } from "../../context/auth-context";
import AuthService from '../../Services/AuthService';

class Login extends Component {

    static contextType = AuthContext;

    state = {
        username: '',
        errorUsername: '',
        password: '',
        errorPassword: '',
        formIsValid: false
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let { username, password, formIsValid } = this.state;

        formIsValid = true; // initial form value

        if (username.trim() === '') {
            this.setState({ errorUsername: 'Username is required.' });
            formIsValid = false;
        }

        if (password.trim() === '') {
            this.setState({ errorPassword: 'Password is required.' });
            formIsValid = false;
        }

        if (formIsValid === true) {
            this.setState({ errorUsername: '' });
            this.setState({ errorPassword: '' });

            // authenticate user credential
            AuthService.authticate({
                username: username,
                password: password
            }).then((response) => {
                let data = response.data;
                console.log("login data", data);
                if (response.status === 200) {
                    this.validateAuthResult(data);
                }
            });
        }

    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        this.setState({ errorUsername: '', errorPassword: '' })

        if (name === 'username' && value.trim() === '') {
            this.setState({ errorUsername: 'Username is required.' });
        }

        if (name === 'password' && value.trim() === '') {
            this.setState({ errorPassword: 'Password is required.' });
        }

    };

    validateAuthResult = (data) => {

        const { username, password } = this.state;
        const { login } = this.context;

        if (data.status === true) {
            // update auth context
            login(username, password, data.id);
            // navigate to myprofile
            this.props.history.push("/");
        } else {
            // TODO: show error msg
            alert("Username or password is incorrect")
        }
    }

    render() {
        const { username, errorUsername, password, errorPassword } = this.state;

        return (
            <div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3 offset-md-2">
                        <center><span>Sign in to start your session</span></center>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-md-3 offset-md-2">

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                    placeholder="Username"
                                    className={`form-control ${errorUsername && 'is-invalid'}`}
                                />
                                <span className="invalid-feedback">{errorUsername}</span>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                    className={`form-control ${errorPassword && 'is-invalid'}`}
                                />
                                <span className="invalid-feedback">{errorPassword}</span>
                            </div>
                            <div className="form-group">
                                <div className="row pull-left">
                                    <div className="col-md-12">
                                        <NavLink className={"btn btn-link forgot-password"} to="/forgotpwd" exact>I forgot my password</NavLink>
                                    </div>
                                </div>
                                <div className="row pull-right">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-danger">Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Login);

//React.memo(Login);