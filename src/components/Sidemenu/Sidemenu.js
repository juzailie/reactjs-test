import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../context/auth-context";
import './Sidemenu.css';

const Sidemenu = (props) => {
    const { authenticated } = useContext(AuthContext);
    return (
        <div className={`col col-md-2 ${!authenticated && 'd-none'}`}>
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
        </div>
    );

};

export default Sidemenu;
