import React, {Component} from 'react';
import axios from '../../axios';

class GemList extends Component {
    state = {
        gemstoneList: []
    }
    componentDidMount () {
        axios.get('/gemstones.json')
        .then(res => {
            const gemstones = [];
            for (let key in res.data) {
                gemstones.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({
                gemstoneList: gemstones
            });
        })
    }

    render () {
        const gemstoneList = this.state.gemstoneList.map(gemstone => {
            return (
                <div>
                    <h1>{gemstone.name}</h1>
                    <h2>{gemstone.description}</h2>
                </div>
            )
        });
        return gemstoneList;
    }
}

export default GemList;