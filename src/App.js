import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header'
import Sidemenu from './components/Sidemenu/Sidemenu'
import Login from './components/Login/Login';
import Resetpassword from './components/Resetpassword/Resetpassword';
import AuthContext from './context/auth-context';

class App extends Component {

  constructor(props){
    super(props);
    console.log("App.js constructor");
  }

  state = {
    authenticated: false
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render(){
    return (
      <BrowserRouter>

        <div className="container-fluid">

          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
            
            <div className='row'>
              <div className='col col-md-12'>
                <div className='header'>
                  <Header login={this.loginHandler}></Header>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col col-md-2'>
                  { this.state.authenticated ? (<Sidemenu></Sidemenu>) : null }
              </div>
              <div className='col col-md-10'>
                <div>
                  <Switch>
                    <Route path="/login" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/logout" render={() => <Login login={this.loginHandler} />} />
                    <Route path="/forgotpwd" render={() => <Resetpassword />} />
                    <Route render={() => <h1>Main Page</h1>}/>
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
