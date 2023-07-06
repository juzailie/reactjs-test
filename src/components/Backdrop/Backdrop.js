import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div>
            {props.show && (<div className="main-backdrop-style" onClick={props.clicked}></div>)}
        </div>
    )
};

export default Backdrop;