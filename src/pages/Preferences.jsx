import React from 'react';
import worldmap from "../images/worldmap.png";
import PreferenceTable from '../components/PreferenceTable'

const Preferences = () => {
    return (
        <div style={{
            backgroundImage: `url(${worldmap})`,
            backgroundPosition: 'center',
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',

            }}
        >
            <h1 style={{textAlign: 'center'}}>Here you can see your preferences</h1>
            <PreferenceTable />
            <div style={{flexDirection: 'row'}}>
                <button type="submit" style={{
                width: "20%",
                backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                marginLeft: '10%',
                borderRadius: '4px'}}>Previous preference</button>
                <button type="submit" style={{
                    width: "20%",
                    backgroundColor: 'lightblue',
                    color: 'black',
                    border: 'none',
                    padding: '10px 20px',
                    marginLeft: '10%',
                    borderRadius: '4px'}}>Create a new preference</button>
                <button type="submit" style={{
                    width: "20%",
                    backgroundColor: 'lightblue',
                    color: 'black',
                    border: 'none',
                    padding: '10px 20px',
                    marginLeft: '10%',
                    borderRadius: '4px'}}>Next preference</button>
            </div>
        </div>
    );
};

export default Preferences;