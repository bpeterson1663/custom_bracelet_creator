import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from '../../axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        this.props.history.push( '/gemstones/' + id+"/edit");
    }
    render () {
            const gemstoneList = this.state.gemstoneList.map(gemstone => {
            return(
                <Card key={gemstone.id} style={{
                                            "width": '300px',
                                            "margin": '30px auto'
                                        }}>
                    <CardActionArea onClick={() => this.editGemstone(gemstone.id)}>
                        <CardContent>
                            <Typography variant="headline" component="h2">{gemstone.name}</Typography>
                            <Typography component="p">{gemstone.description}</Typography>
                            <Typography component="p">Price Per Strand: ${gemstone.pricePerStrand}</Typography>
                            <Typography component="p">Strand Size: {gemstone.strandSize}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={() => this.removeGemstone(gemstone.id)} >Delete Gemstone</Button>
                    </CardActions>
                    
                </Card>
                
            )
        });
        return (
            <div>
                {gemstoneList}
            </div>
        )
    }
    
}

export default GemList;