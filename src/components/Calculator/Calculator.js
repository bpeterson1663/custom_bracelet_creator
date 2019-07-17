import React, {Component} from 'react';
import axios from '../../axios';
import BraceletContainer from './BraceletContainer/BraceletContainer';

class Calculator extends Component {
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
    render(){
        return(
            <div style={{
                "padding": "20px",
            }}>
                <h1>Calculator</h1>
                <BraceletContainer gemstoneList={this.state.gemstoneList}/>
            </div>
        )
    }
}

export default Calculator;