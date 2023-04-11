// src/components/Sidebar/Sidebar.js
import React, { useState, useEffect } from 'react';
import '../../styles/SidebarMod.css';



const Sidebar = ({ children, position }) => {
    const [fixed, setFixed] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${position} ${fixed ? 'fixed' : ''} ${collapsed ? 'collapsed' : ''}`}>
            <button className="toggle-collapse" onClick={toggleCollapsed}>
                {collapsed ? (position === 'left' ? '▶' : '◀') : (position === 'left' ? '◀' : '▶')}
            </button>

            <div className="sidebar-content">
                {children}
            </div>
        </div>
    );


};

export default Sidebar;
