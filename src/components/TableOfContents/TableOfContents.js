//src/components/TableOfContents.js
import React from 'react';
import '../../styles/TableOfContents.css';
import '../../styles/SidebarButtons.css';

const TableOfContents = ({ headings }) => {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div className="table-of-contents">
            <h4>Navigation</h4>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <button className="sidebar-button" onClick={() => handleClick(heading.id)}>{heading.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
