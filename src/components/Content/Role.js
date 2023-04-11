import React from 'react';

const Role = ({ title, subtitle, responsibilities, accomplishments }) => (
    <div className="role">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <h5>Responsibilities:</h5>
        <p>{responsibilities}</p>
        <h5>Key Accomplishments:</h5>
        <ul className="key-accomplishments">
            {accomplishments.map((accomplishment, index) => (
                <li key={index}>{accomplishment}</li>
            ))}
        </ul>
        <div className="visual-entry-demarcation"></div>
    </div>
);

export default Role;
