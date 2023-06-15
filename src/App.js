import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header'
import Sidemenu from './components/Sidemenu/Sidemenu'
import Login from './components/Login/Login';
import Resetpassword from './components/Resetpassword/Resetpassword';
import { AuthProvider } from './context/auth-context';
import MyProfile from './components/MyProfile/MyProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Products from './components/Products/Products';
import MainPage from './components/MainPage/MainPage';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

class App extends Component {

  state = {
    authenticated: false,
    username: "",
    password: ""
  }

  loginHandler = (authenticated) => {
    console.log("loginhandler", this.props);
    this.setState({ authenticated: authenticated });
  };

  logoutHandler = () => {
    console.log("logoutHandler", this.props);
    window.location.href = "/login"
    this.setState({ authenticated: false });
  };

  render() {
    return (
      <BrowserRouter>

        <div className="container-fluid">


          <AuthProvider>

            <div className='row'>
              <div className='col col-md-12'>
                <div className='header'>
                  <Header></Header>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col col-md-12'>
                <div className='breadcrumb'>
                  <Breadcrumb></Breadcrumb>
                </div>
              </div>
            </div>

            <div className='row'>
           
              <Sidemenu></Sidemenu>

              <div className='col col-md-10'>
                <div>
                  <Switch>
                    <Route path="/login" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/logout" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/forgotpwd" render={() => <Resetpassword />} />
                    <Route path="/myprofile" render={() => <MyProfile />} />
                    <Route path="/changepassword" render={() => <ChangePassword />} />
                    <Route path="/products" render={() => <Products />} />
                    <Route render={() => <MainPage />} />
                  </Switch>
                </div>
              </div>

            </div>

          </AuthProvider>

        </div>

      </BrowserRouter>
    );
  }

}

export default App;
