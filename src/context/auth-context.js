import React, { createContext, Component } from 'react';
import UserService from '../Services/UserService';

export const AuthContext = createContext();

export class AuthProvider extends Component {

    state = {
        authenticated: false,
        username: '',
        password: '',
    };

    componentDidMount() {
        // Perform actions on component load
        this.checkLogedin()
            .then((r) => {
                console.log('auth provider loaded!');
            });

    }

    checkLogedin = () => {
        return new Promise((resolve, reject) => {

            let userid = localStorage.getItem("userid");

            if (userid) {

                UserService.getuser(userid)
                    .then((response) => {
                        const { status } = response;
                        if (status === 200) {
                            this.setState({ authenticated: true });
                        }
                        return resolve();
                    });

            } else {
                return resolve();
            }

        });
    }


    login = (username, password, userid) => {
        // Perform login logic and set the isLoggedIn state to true
        this.setState({ authenticated: true, username, password });
        localStorage.setItem("userid", userid);
    };

    logout = () => {
        // Perform logout logic and set the isLoggedIn state to false
        this.setState({ authenticated: false, username: '', password: '' });
        localStorage.removeItem("userid");
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

export default AuthProvider