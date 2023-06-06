import React from 'react'
import data from '../db/countries_data.json'

const Table = ({ Countries }) => {
    return (
        <table style ={{textAlign: 'center', padding: "15px"}}>
            <thead>
            <tr>
                <th>Country Name</th>
                <th>Climate</th>
                <th>Economics</th>
                <th>Energy</th>
                <th>Safety</th>
                <th>LifeCost</th>
                <th>LifeLvl</th>
                <th>Health</th>
                <th>CrimeRate</th>
                <th>Pollution</th>
            </tr>
            </thead>
            <tbody>
            {data.map((country) => (
                <tr key={country._id}>
                    <td>{country.Country_Name}</td>
                    <td>{country.Climate}</td>
                    <td>{country.Economics}</td>
                    <td>{country.Energy}</td>
                    <td>{country.Safety}</td>
                    <td>{country.LifeCost}</td>
                    <td>{country.LifeLvl}</td>
                    <td>{country.Health}</td>
                    <td>{country.CrimeRate}</td>
                    <td>{country.Pollution}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;