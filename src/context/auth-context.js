import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';

export const AuthContext = createContext();

export class AuthProvider extends Component {

    state = {
        authenticated: false,
        username: '',
        password: '',
    };

    login = (username, password) => {
        // Perform login logic and set the isLoggedIn state to true
        this.setState({ authenticated: true, username, password });
    };

    logout = () => {
        // Perform logout logic and set the isLoggedIn state to false
        this.setState({ authenticated: false, username: '', password: '' });

        // navigate to myprofile
        // this.props.history.push("/myprofile");
    };

    render() {
        const { authenticated, username, password } = this.state;
        const { login, logout } = this;

        return (
            <AuthContext.Provider value={{ authenticated, username, password, login, logout }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
};

export default withRouter(AuthProvider) 