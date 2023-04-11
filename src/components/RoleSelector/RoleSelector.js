// src/components/RoleSelector.js

import React, { useState } from 'react';
import '../../styles/RoleSelector.css';



const RoleSelector = ({ onSelect }) => {
    const [selectedRole, setSelectedRole] = useState('all');

    const handleRoleClick = (role) => {
        setSelectedRole(role);
        onSelect(role);
    };

    return (
        <div className="role-selector">
            <h4>Select Role</h4>
            <span
                className={`sidebar-button ${selectedRole === 'all' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('all')}
            >
                All
            </span>
            <span
                className={`sidebar-button ${selectedRole === 'ENG' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('ENG')}
            >
                Engineer
            </span>
            <span
                className={`sidebar-button ${selectedRole === 'MNG' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('MNG')}
            >
                Manager
            </span>
            <span
                className={`sidebar-button ${selectedRole === 'SCI' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('SCI')}
            >
                Scientist
            </span>
            <span
                className={`sidebar-button ${selectedRole === 'EM' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('EM')}
            >
                Engineering Manager
            </span>
        </div>
    );
};

export default RoleSelector;
