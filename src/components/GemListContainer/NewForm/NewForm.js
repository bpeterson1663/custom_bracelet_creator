import React, {Component} from 'react';
import FieldInput from './FieldInput/FieldInput';
import Button from './Button/Button';

class NewForm extends Component {

    state = {
        name: '',
        description: ''
    };

    onSubmitHandler = () => {
        const gemstone = {
            name: this.state.name,
            description: this.state.description
        }
        this.props.submitForm(gemstone);
        this.setState({
            name: '',
            description: ''
        })
    }

    formChangeHandler = (event, param) => {
        this.setState({
            [param]: event.target.value
        });
    }

    render () {

        return (
            <div>
                <h1>Add New Gemstone</h1>
                <FieldInput type="text" label="Name" value={this.state.name} changed={(event) => this.formChangeHandler(event, 'name')}/>
                <FieldInput type="text" label="Description" value={this.state.description} changed={(event) => this.formChangeHandler(event, 'description')}/>
                <Button label="Submit" submit={this.onSubmitHandler} />
            </div>
        )
    }
};

export default NewForm;