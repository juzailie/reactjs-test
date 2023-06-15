import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AuthContext } from "../../context/auth-context";
import Clock from './Clock/Clock';
import './Header.css';

class Header extends Component {

  static contextType = AuthContext;

  handleLogout = () => {
    const { logout } = this.context;
    logout();
    this.props.history.push("/login");
  };

  render() {

    const { authenticated } = this.context;

    return (
      <div className='row header align-items-center'>
        <div className='col col-md-10'>
        </div>
        <div className='col col-md-2'>
          <Clock />
          <div className='row justify-content-end'>
            <div className='col col-md-12'>
              {
                authenticated === true ? 
                (<button type="button" className={"btn btn-default btnlogout"} onClick={this.handleLogout}>Logout</button>)
                : 
                (<NavLink className={"btn btn-default btnlogin"} to="/login" exact>Login</NavLink>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default withRouter(Header);
//export default React.memo(Header);