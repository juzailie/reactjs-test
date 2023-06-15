import React, { useEffect, useContext } from 'react';
import './MyProfile.css';
import { AuthContext } from "../../context/auth-context";

const MyProfile = (props) => {

    const { authenticated } = useContext(AuthContext);

    useEffect(() => {
        return () => { console.log("cockpit.js cleanup work in useEffect"); };
    }, []); // will only execute once after component rendered

    return (
        <div className="row">
            {authenticated && (
                <div className="col-md-3">
                    <div>
                        <p>Username : {props.username}</p>
                        <p>Email : {props.email}</p>
                    </div>
                    <div>
                        <p>Failed to load User record</p>
                    </div>
                </div>
            )}

            {!authenticated && (
                <div className="col-md-3 offset-md-6">
                    <h1>Unauthorized</h1>
                </div>
            )}

        </div>
    );

};

export default MyProfile;