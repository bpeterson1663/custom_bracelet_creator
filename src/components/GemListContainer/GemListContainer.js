import React, { Component } from 'react';
import NewForm from './NewForm/NewForm';
import GemList from './GemList/GemList';
import axios from '../../axios';

class GemListContainer extends Component {
    state = {
        gemstoneList: []
    }
    componentDidMount () {
        this.getGemstoneList();
    }

    getGemstoneList () {
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
            .catch(error => {console.log("ERROR: ", error)});
    }

    removeGemstone (id) {
        axios.delete('/gemstones/'+ id + '.json')
            .then(res => {
                this.getGemstoneList();
            })
            .catch(error => {console.log("ERROR: ", error)});
    }

    addGemstoneHandler (gemstone) {
        axios.post('/gemstones.json', gemstone)
            .then(response => {
                this.getGemstoneList();
            })
            .catch(error => {console.log("ERROR: ", error)});
    }
    
    render() {
        return  (
            <div>
                <NewForm submitForm={this.addGemstoneHandler.bind(this)} />
                <GemList deleteButton={this.removeGemstone.bind(this)}gemstoneList={this.state.gemstoneList} />
            </div>
        )

    }
}

export default GemListContainer;