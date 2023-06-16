import React, { useEffect, useContext, useState } from 'react';
import './MyProfile.css';
import { AuthContext } from "../../context/auth-context";

import UserService from '../../Services/UserService';

const MyProfile = (props) => {

    const { authenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {

        let userid = localStorage.getItem("userid");
        if (userid) {
            UserService.getuser(userid).then((response) => {

                const { status } = response;
                const { email, username } = response.data;

                if (status === 200) {
                    setEmail(email);
                    setUsername(username);
                }
            });
        }

        return () => {
            console.log("cockpit.js cleanup work in useEffect");
        };
    }, []); // will only execute once after component rendered

    return (
        <div className="row">
            {authenticated && username && (
                <div className="col-md-3">
                    <div>
                        <p>Username : {username}</p>
                        <p>Email : {email}</p>
                    </div>
                </div>
            )}

            {authenticated && !username && (
                <div className="col-md-3">
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