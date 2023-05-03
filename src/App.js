import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header'
import Sidemenu from './components/Sidemenu/Sidemenu'
import Login from './components/Login/Login';
import Resetpassword from './components/Resetpassword/Resetpassword';
import AuthContext from './context/auth-context';
import MyProfile from './components/MyProfile/MyProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Products from './components/Products/Products';
import MainPage from './components/MainPage/MainPage';

class App extends Component {

  constructor(props){
    super(props);
    console.log("App.js constructor");
  }

  state = {
    authenticated: false
  }

  loginHandler = () => {
    
    // validate username and password

    this.setState({authenticated: true});

  };

  logoutHandler = () => {
    this.setState({authenticated: false});
  };

  render(){
    return (
      <BrowserRouter>

        <div className="container-fluid">

          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler, logout: this.logoutHandler }}>
            
            <div className='row'>
              <div className='col col-md-12'>
                <div className='header'>
                  <Header authenticated={this.state.authenticated} login={this.loginHandler} logout={this.logoutHandler}></Header>
                </div>
              </div>
            </div>

            <div className='row'>
            { this.state.authenticated ? (
              <div className='col col-md-2'>
                  <Sidemenu></Sidemenu>
              </div>
              ) : null 
            }
              <div className='col col-md-10'>
                <div>
                  <Switch>
                    <Route path="/login" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/logout" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/forgotpwd" render={() => <Resetpassword />} />
                    <Route path="/myprofile" render={() => this.state.authenticated ? (<MyProfile />) : <h1>Unauthorized</h1>} />
                    <Route path="/changepassword" render={() => this.state.authenticated ? (<ChangePassword />) : <h1>Unauthorized</h1>} />
                    <Route path="/products" render={() => this.state.authenticated ? <Products /> : <h1>Unauthorized</h1>} />
                    <Route render={() => <MainPage/>}/>
                  </Switch>
                </div>
              </div>
            </div>
           
          </AuthContext.Provider>

        </div>
        
        </BrowserRouter>
    );
  }

}

export default App;
