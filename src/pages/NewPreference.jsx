import React from 'react';
import NewPreferenceForm from "../forms/NewPreferenceForm";
import worldmap from "../images/worldmap.png";

const NewPreference = () => {
    return (
        <div style={{
            backgroundImage: `url(${worldmap})`,
            backgroundPosition: 'center',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            textAlign: 'center'
            }}
        >
            <h1>Here you can add a new preference</h1>
            <NewPreferenceForm />
        </div>
    );
};

export default NewPreference;