import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const BraceletContainer = (props) => {
    const gemstoneOptions = props.gemstoneList.map((gemstone) => {return <MenuItem key={gemstone.id} value={gemstone.name}>{gemstone.name}</MenuItem>})
    const gemstoneValue = '';
    return (
        <Card style={{
                    "width": '300px',
                    "margin": '30px auto'
                }}>
            <CardActionArea>
                <CardContent>
                    <TextField type="number" label="Quantity" name="quantity" />
                    <FormControl>
                        <InputLabel>Gemstone</InputLabel>
                        <Select
                            name="gemestoneSelected"
                            value={gemstoneValue}>
                            {gemstoneOptions}
                        </Select>
                    </FormControl>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BraceletContainer;