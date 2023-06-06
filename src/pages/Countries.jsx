import React from 'react';
import Table from '../components/Table'
import worldmap from "../images/worldmap.png";
const Countries = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${worldmap})`,
                backgroundPosition: 'center',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center'
                }}
            >
            <h1 style ={{width: '100%', textAlign: 'center'}}>Here is the list of all the countries</h1>
            <Table />
        </div>
    );
};

export default Countries;