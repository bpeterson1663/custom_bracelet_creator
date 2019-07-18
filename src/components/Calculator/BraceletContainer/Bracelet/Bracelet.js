import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography/Typography';

const Bracelet = (props) => {
    const [costPerBead, displayPricePerBead] = useState('');
    const [totalCostForBead, displayTotalPriceForBead] = useState('');
    const gemstoneOptions = props.gemstones.map((gemstone) => {return <MenuItem key={gemstone.id} value={gemstone.costPerBead ? gemstone.costPerBead : 0}>{gemstone.name}</MenuItem>})

    const setPriceHandler = (event) => {
        displayPricePerBead(event.target.value)
    };

    const setTotalPriceHandler = (event) => {
        displayTotalPriceForBead(event.target.value * costPerBead);
    };
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <TextField type="number" label="Quantity" name="quantity" onChange={setTotalPriceHandler.bind(this)}/>
                    <FormControl>
                        <InputLabel>Gemstone</InputLabel>
                        <Select
                            name="gemestoneSelected"
                            onChange={setPriceHandler.bind(this)}>
                            {gemstoneOptions}
                        </Select>
                    </FormControl>
                    <Typography>Price: {costPerBead}</Typography>
                    <Typography>Total Cost: {totalCostForBead}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Bracelet;