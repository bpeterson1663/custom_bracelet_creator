import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import NewGem from './NewGem/NewGem';
import EditGem from './EditGem/EditGem';
import GemList from './GemList/GemList';
import axios from '../../axios';

class GemListContainer extends Component {
    state = {
        gemstoneList: []
    }

    render() {
        return  (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/gemstones/" exact>Gemstone List</NavLink></li>
                            <li><NavLink to={{
                                            pathname: '/add-gem',
                                            hash: '#add'
                                        }}>Add Gemstone</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/add-gem" component={NewGem} />
                    <Route path="/gemstones" component={GemList} />
                </Switch>
            </div>
        )

    }
}

export default GemListContainer;