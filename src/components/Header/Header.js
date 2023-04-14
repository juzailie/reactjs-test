import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Clock from './Clock/Clock';
import './Header.css';
import AuthContext from "../../context/auth-context";

const Header = (props) => {

    const authContext = useContext(AuthContext);

    return (
      <div className='row header align-items-center'>
          <div className='col col-md-10'>
          </div>
          <div className='col col-md-2'>
            <Clock/>
            <div className='row justify-content-end'>
                <div className='col col-md-12'>
                    { props.authenticated === true ? 
                      (<button type="button" className={"btn btn-default btnlogout"} onClick={authContext.logout}>Logout</button>) 
                      : (<NavLink className={"btn btn-default btnlogin"} to="/login" exact>Login</NavLink> )
                    }
                </div>
            </div>
          </div>
      </div>
    );
  
  }
  
  export default React.memo(Header);