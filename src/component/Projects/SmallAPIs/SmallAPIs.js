import React from 'react';
import './SmallAPIs.css';
import Students from './OwnAPI';

function SmallAPIs() {
    return (
        <div style={{maxWidth: "1000px", margin: "auto"}}>
            <table>
            <thead title='Student Details'>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Location</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {Students.map((item) => {
                    let { id, name, standard, section, location, score } = item;
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{standard}</td>
                            <td>{section}</td>
                            <td>{location}</td>
                            <td>{score}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        );
}

            export default SmallAPIs