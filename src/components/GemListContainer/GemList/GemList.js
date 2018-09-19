import React from 'react';
import Button from '../NewForm/Button/Button';

const GemList = (props) => {

    const gemstones = props.gemstoneList.map(gemstone => {
        return(
            <div key={gemstone.id}>
                <h1>{gemstone.name}</h1>
                <h2>{gemstone.description}</h2>
                <Button submit={() => props.deleteButton(gemstone.id)} label="Remove Gemstone"/>
            </div>
        )
    });
    return gemstones

}

export default GemList;