import React from 'react';
import Bracelet from './Bracelet/Bracelet';

const BraceletContainer = (props) => {
    return (
        <Bracelet gemstones={props.gemstoneList} />
    );
};

export default BraceletContainer;