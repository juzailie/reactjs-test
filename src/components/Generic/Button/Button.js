import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={["btn btn-danger", classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;