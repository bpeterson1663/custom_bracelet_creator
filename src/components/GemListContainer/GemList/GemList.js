import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Button from '../NewGem/NewForm/Button/Button';
import axios from '../../../axios';
import EditGem from '../EditGem/EditGem';

class GemList extends Component {
    state = {
        gemstoneList: []
    }
    componentDidMount(){
        this.getGemstoneList();
    }
    getGemstoneList = () => {
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

    editGemstone (id) {
        this.props.history.push( '/gemstones/' + id);
    }
    render () {
            const gemstoneList = this.state.gemstoneList.map(gemstone => {
            return(
                <div key={gemstone.id}>
                    <h1>{gemstone.name}</h1>
                    <h2>{gemstone.description}</h2>
                    <Button submit={() => this.removeGemstone(gemstone.id)} label="Remove Gemstone"/>
                    <Button submit={() => this.editGemstone(gemstone.id)} label="Edit Gemstone" />
                </div>
                
            )
        });
        return (
            <div>
                <section>
                    {gemstoneList}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={EditGem} />
            </div>
        )
    }
    
}

export default GemList;