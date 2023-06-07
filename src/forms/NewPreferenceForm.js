import React, { useState } from 'react';

const NewPreferenceForm = () => {
    const [Climate, setClimate] = useState('');
    const [Economics, setEconomics] = useState('');
    const [Energy, setEnergy] = useState('');
    const [Safety, setSafety] = useState('');
    const [LifeCost, setLifeCost] = useState('');
    const [LifeLvl, setLifeLvl] = useState('');
    const [Health, setHealth] = useState('');
    const [CrimeRate, setCrimeRate] = useState('');
    const [Pollution, setPollution] = useState('');

    const addAPreference = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/addPreference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Climate,
                    Economics,
                    Energy,
                    Safety,
                    LifeCost,
                    LifeLvl,
                    Health,
                    CrimeRate,
                    Pollution
                })
            });
            if (response.ok) {
                // Preference added successfully
                // Reset form fields
                setClimate('');
                setEconomics('');
                setEnergy('');
                setSafety('');
                setLifeCost('');
                setLifeLvl('');
                setHealth('');
                setCrimeRate('');
                setPollution('');
                alert('Preference added successfully');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error adding preference:', error);
            alert('An error occurred while adding a preference');
        }
    };

    const inputStyle = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: '1px',
        padding: '5px',
        borderRadius: '4px',
        /* Другие стили */
    };

    return (
        <form onSubmit={addAPreference}>
            <p>Climate(1 for the most cold climate and 9 for the warmest):</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Climate"
                value={Climate}
                onChange={(e) => setClimate(e.target.value)}
            />

            <p>Economics:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Economics"
                value={Economics}
                onChange={(e) => setEconomics(e.target.value)}
            />

            <p>Energy:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Energy"
                value={Energy}
                onChange={(e) => setEnergy(e.target.value)}
            />

            <p>Safety:</p>
            <input
                style={inputStyle}
                type="password"
                placeholder="Safety"
                value={Safety}
                onChange={(e) => setSafety(e.target.value)}
            />
            <p>LifeCost:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="LifeCost"
                value={LifeCost}
                onChange={(e) => setLifeCost(e.target.value)}
            />
            <p>LifeLvl:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="LifeLvl"
                value={LifeLvl}
                onChange={(e) => setLifeLvl(e.target.value)}
            />
            <p>Health:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Health"
                value={Health}
                onChange={(e) => setHealth(e.target.value)}
            />
            <p>CrimeRate:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="CrimeRate"
                value={CrimeRate}
                onChange={(e) => setCrimeRate(e.target.value)}
            />
            <p>Pollution</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Pollution"
                value={Pollution}
                onChange={(e) => setPollution(e.target.value)}
            />

            <p></p>
            <button type="submit" style={{backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px'}}>Register</button>
        </form>
    );
};

export default NewPreferenceForm;
