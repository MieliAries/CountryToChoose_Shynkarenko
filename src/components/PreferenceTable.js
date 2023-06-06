import React from 'react'
import data from '../db/countries_data.json'

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
            {data.map((country) => (
                <tr key={country._id}>
                    <td>{country.Pollution}/{country.Climate}/{country.Economics}/{country.Energy}/{country.Safety}/{country.LifeCost}/{country.LifeLvl}/{country.Health}/{country.CrimeRate}</td>
                    <td>{country.Country_Name}</td>
                    <td>{country.Country_Name}</td>
                    <td>{country.Country_Name}</td>
                    <td>{country.Country_Name}</td>
                    <td>{country.Country_Name}</td>
                </tr>
            ))}
            </tbody>

        </table>
    );
};

export default PreferenceTable;