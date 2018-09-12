import React from 'react';

const FieldInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} value={props.value} onChange={props.changed} />
        </div>   
    )
};

export default FieldInput;