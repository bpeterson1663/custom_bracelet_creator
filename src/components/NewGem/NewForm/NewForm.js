import React, {Component} from 'react';
import FieldInput from './FieldInput/FieldInput';
import Button from '@material-ui/core/Button';
import axios from '../../../axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class NewForm extends Component {

    state = {
        name: '',
        description: '',
        warning: false,
        success: false,
        open: false
    };

    onSubmitHandler = () => {
        const gemstone = {
            name: this.state.name,
            description: this.state.description
        }
        if(!this.state.name || !this.state.description){
            this.setState({
                open: true, 
                warning: true});
        }
        this.addGemstoneHandler(gemstone);
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

    handleClose = () => {
        this.setState({open: false, warning: false, success: false});
    }

    addGemstoneHandler (gemstone) {
        axios.post('/gemstones.json', gemstone)
            .then(response => {
                this.setState({
                    success: true,
                    open: true
                })
            })
            .catch(error => {console.log("ERROR: ", error)});
    }

    render () {
        let title = null,
            body = null;
        if(this.state.success){
            title = "Success";
            body = "Gemstone Saved Successful";
        }
        if(this.state.warning){
            title = "Warning";
            body = "Please Complete Form";
        }
        return (
            <div style={{
                "padding": "20px"
            }}>
                <h1>Add New Gemstone</h1>
                <FieldInput type="text" label="Name" value={this.state.name} changed={(event) => this.formChangeHandler(event, 'name')}/>
                <FieldInput type="text" label="Description" value={this.state.description} changed={(event) => this.formChangeHandler(event, 'description')}/>
                <Button onClick={this.onSubmitHandler} color="primary" variant="contained">Submit</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>{" " + title + " "}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {body}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

export default NewForm;