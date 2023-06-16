import React from 'react'
import data from '../db/preferences_data.json'

const PreferenceTable = ({ Countries }) => {
    return (
        <table style ={{textAlign: 'center', padding: "15px"}}>
            <thead>
            <tr>
                <th>Chosen criterias</th>
                <th>Top 1 country</th>
                <th>Top 2 country</th>
                <th>Top 3 country</th>
                <th>Top 4 country</th>
                <th>Top 5 country</th>
            </tr>
            </thead>
            <tbody>
            {data.map((preferences) => (
                <tr key={preferences._id}>
                    <td>{preferences.Pollution}/{preferences.Climate}/{preferences.Economics}/{preferences.Energy}/{preferences.Safety}/{preferences.LifeCost}/{preferences.LifeLvl}/{preferences.Health}/{preferences.CrimeRate}</td>
                    <td>{preferences.Country1}</td>
                    <td>{preferences.Country2}</td>
                    <td>{preferences.Country3}</td>
                    <td>{preferences.Country4}</td>
                    <td>{preferences.Country5}</td>
                </tr>
            ))}
            </tbody>

        </table>
    );
};

export default PreferenceTable;