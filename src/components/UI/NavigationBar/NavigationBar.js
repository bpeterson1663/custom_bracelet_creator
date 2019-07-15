import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <NavLink to="/gemstones/" exact><Button color="primary" variant="contained">Gemstone List</Button></NavLink>
                <NavLink to={{
                                pathname: '/add-gem',
                                hash: '#add'
                            }}><Button color="primary" variant="contained">Add Gemstone</Button></NavLink>
                <NavLink to="/calculator" exact><Button color="primary" variant="contained">Price Calculator</Button></NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;