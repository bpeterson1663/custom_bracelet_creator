import React from 'react';
import TextField from '@material-ui/core/TextField';

const FieldInput = (props) => {
    return (
        <div>
            <TextField
                id={props.label}
                label={props.label}
                value={props.value}
                onChange={props.changed}
                margin="normal"
                required
                />
            {/* <input type={props.type} value={props.value} onChange={props.changed} /> */}
        </div>   
    )
};

export default FieldInput;