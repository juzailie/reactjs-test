import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidemenu.css';

const Sidemenu = (props) => {

    return (
        <div className='side-menu'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className={"nav-link"} to="/myprofile" exact>My Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to="/changepassword">Change Password</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to="/products">Products</NavLink>
                </li>
            </ul>
        </div>
    );

};
  
export default Sidemenu;
