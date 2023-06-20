import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../context/auth-context";
import './Sidemenu.css';

const Sidemenu = (props) => {
    
    const { authenticated } = useContext(AuthContext);
    
    // Check if the current location is the dashboard route
    const isDashboardRoute = window.location.pathname === '/'

    console.log("authenticated ", authenticated);
    console.log("isDashboardRoute ", isDashboardRoute);

    return (
        <div className={`col col-md-2 ${(authenticated === false || isDashboardRoute === true) && 'd-none'}`}>
            <div className='side-menu'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to="/myprofile" exact>My Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to="/changepassword">Change Password</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to="/product">Products</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default Sidemenu;
