import React, {Component} from 'react';
import axios from '../../axios';
import Button from '@material-ui/core/Button';
import FieldInput from '../NewGem/NewForm/FieldInput/FieldInput';

class EditGem extends Component {
    state = {
        loadedGemstone: null
    }

    componentDidMount() {
        if(this.props.match.params.id){
            this.getGemstone();
        }
    }
    onUpdateHandler = () => {
        const gemstone = {
            name: this.state.name,
            description: this.state.description,
            id: this.props.match.params.id
        }
        this.updateGemstone(gemstone);
    }

    formChangeHandler = (event, param) => {
        this.setState({
            [param]: event.target.value
        });
    }
    getGemstone () {
        axios.get('/gemstones/' + this.props.match.params.id + '.json')
            .then(response => {
                if(response.data) {
                    this.setState({
                        loadedGemstone: true,
                        description: response.data.description,
                        name: response.data.name
                    })
                }else{
                    this.props.history.push( '/gemstones/');
                }
                
            })
            .catch(error => {console.log("ERROR: ", error)});
    }

    updateGemstone (gemstone) {
       
        axios.put('/gemstones/' + gemstone.id + '.json', gemstone)
            .then(response => {
                this.setState({
                    loadedGemstone: false
                });
                this.props.history.push( '/gemstones/');
            })
            .catch(error => {console.log("ERROR: ", error)});

    }
    render () {
        let gemstone = null;
        if(this.state.loadedGemstone){
            gemstone = (
                <div style={{
                        "padding": "20px",
                }}>
                    <h1>Edit Gemstone</h1>
                    <FieldInput type="text" label="Name" value={this.state.name} changed={(event) => this.formChangeHandler(event, 'name')}/>
                    <FieldInput type="text" label="Description" value={this.state.description} changed={(event) => this.formChangeHandler(event, 'description')}/>
                    <Button color="primary" variant="contained" onClick={this.onUpdateHandler} >Update</Button>               
                </div>
            );
        }

        return gemstone;
    }
};

export default EditGem;

