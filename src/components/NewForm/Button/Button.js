import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.submit}> {props.label} </button>
    );
};

export default Button;