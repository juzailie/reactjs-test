import React, { useEffect } from 'react';
import './MyProfile.css';

const MyProfile = (props) => {

    useEffect(() => {
        return () => { console.log("cockpit.js cleanup work in useEffect");  };
    }, []); // will only execute once after component rendered

    return (
        <div>
           <div>
                <p>Username : { props.username }</p>
                <p>Email : { props.email }</p>
            </div>
            <div>
                <p>Failed to load User record</p>
            </div>
        </div>
    );
  
};
  
export default MyProfile;