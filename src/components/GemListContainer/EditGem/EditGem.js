import React, {Component} from 'react';
import axios from '../../../axios';
import Button from '../NewGem/NewForm/Button/Button';
import FieldInput from '../NewGem/NewForm/FieldInput/FieldInput';

class EditGem extends Component {

    state = {
        loadedGemstone: null
    }

    componentDidMount() {
        this.getGemstone();
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
        if (this.props.match.params.id){ 
            axios.get('/gemstones/' + this.props.match.params.id + '.json')
                .then(response => {
                    this.setState({
                        loadedGemstone: true,
                        description: response.data.description,
                        name: response.data.name
                    })
                })
                .catch(error => {console.log("ERROR: ", error)});
        }
    }

    updateGemstone (gemstone) {
       
        axios.put('/gemstones/' + gemstone.id + '.json', gemstone)
            .then(response => {
                console.log("Response: ", response);
            })
            .catch(error => {console.log("ERROR: ", error)});

    }
    render () {
        let gemstone = null;
        console.log("PROPS: ", this.props);
        if(this.state.loadedGemstone){
            gemstone = (
                <div>
                    <FieldInput type="text" label="Name" value={this.state.name} changed={(event) => this.formChangeHandler(event, 'name')}/>
                    <FieldInput type="text" label="Description" value={this.state.description} changed={(event) => this.formChangeHandler(event, 'description')}/>
                    <Button label="Update" submit={this.onUpdateHandler} />               
                </div>
            );
        }

        return gemstone;
    }
};

export default EditGem;

