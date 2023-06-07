import React from 'react';
import NewPreferenceForm from "../forms/NewPreferenceForm";

const NewPreference = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'Left',
                height: '100vh'
            }}
        >
            <h1>Here you can add a new preference</h1>
            <NewPreferenceForm />
        </div>
    );
};

export default NewPreference;