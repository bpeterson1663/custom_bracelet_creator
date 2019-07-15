import React, {Component} from 'react';
import FieldInput from './FieldInput/FieldInput';
import Button from '@material-ui/core/Button';
import axios from '../../../axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
            description: this.state.description,
            pricePerStrand: this.state.pricePerStrand,
            strandSize: this.state.strandSize
        };
        if(!this.state.name || !this.state.description || !this.state.pricePerStrand || !this.state.strandSize){
            this.setState({
                open: true, 
                warning: true});
        }
        this.addGemstoneHandler(gemstone);
        this.setState({
            name: '',
            description: '',
            pricePerStrand: '',
            strandSize: ''
        })
    }

    formChangeHandler = (event, param) => {
        this.setState({
            [param]: event.target.value
        });
    }
    selectChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
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
                <FieldInput type="text" label="Name" name="name" value={this.state.name} changed={(event) => this.formChangeHandler(event, 'name')}/>
                <FieldInput type="text" label="Description" name="description" value={this.state.description} changed={(event) => this.formChangeHandler(event, 'description')}/>
                <FieldInput type="number" label="Price Per Starnd" name="pricePerStrand" value={this.state.pricePerStrand} changed={(event) => this.formChangeHandler(event, 'pricePerStrand')} />
                <FormControl>
                    <InputLabel>Size of Strand</InputLabel>
                    <Select
                        value={this.state.strandSize}
                        onChange={this.selectChangeHandler}
                        name="strandSize">
                        <MenuItem value={8}>Eight Inch</MenuItem>
                        <MenuItem value={15}>Fifteen Inch</MenuItem>
                    </Select>
                </FormControl>
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