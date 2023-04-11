import React, { useState, useEffect } from 'react';

const Skill = ({ skill }) => <li className="skill-item">{skill.skill}</li>;


const Skills = ({ selectedRole }) => {
    const [skillsData, setSkillsData] = useState([]);
    // const [filter, setFilter] = useState('all');

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/data/skills.json');
            const data = await response.json();
            setSkillsData(data.skills);
        };

        loadData();
    }, []);

    // const handleFilterChange = (e) => {
    //     setFilter(e.target.value);
    // };

    const filteredSkills = (skills) => {
        if (selectedRole === 'all') {
            return skills;
        }
        if (selectedRole === 'EM') {
            return skills.filter((skill) => skill.labels.includes('ENG') || skill.labels.includes('MNG'));
        }
        return skills.filter((skill) => skill.labels.includes(selectedRole));
    };

    const isCategoryEmpty = (category) => {
        return !category.subcategories.some((subcategory) => {
            return filteredSkills(subcategory.skills).length > 0;
        });
    };

    return (
        <section id="skills">
            <h2>Core Competencies:</h2>
            {/* <select value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="ENG">Engineer</option>
                <option value="MNG">Manager</option>
                <option value="SCI">Scientist</option>
                <option value="EM">Engineering Manager</option>
            </select> */}

            {skillsData.map((category) => (
                !isCategoryEmpty(category) && (
                    <div key={category.category} className="category">
                        <h3>{category.category}</h3>
                        {category.subcategories.map((subcategory) => {
                            const filtered = filteredSkills(subcategory.skills);
                            return (
                                filtered.length > 0 && (
                                    <div key={subcategory.subcategory} className="subcategory">
                                        <h4>{subcategory.subcategory}</h4>
                                        <ul className="skills-list">
                                            {filtered.map((skill) => (
                                                <Skill key={skill.skill} skill={skill} />
                                            ))}
                                        </ul>
                                    </div>
                                )
                            );
                        })}
                    </div>
                )
            ))}
        </section>
    );
};

export default Skills;


/*

import React, { useState, useEffect } from 'react';

const Skill = ({ skill }) => <li>{skill.skill}</li>;

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/data/skills.json');
            const data = await response.json();
            setSkillsData(data.skills);
        };

        loadData();
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredSkills = (skills) => {
        if (filter === 'all') {
            return skills;
        }
        return skills.filter((skill) => skill.labels.includes(filter));
    };

    return (
        <section id="skills">
            <h2>Core Competencies:</h2>
            <select value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="ENG">Engineer</option>
                <option value="MNG">Manager</option>
                <option value="SCI">Scientist</option>
            </select>
            {skillsData.map((category) => (
                <div key={category.category}>
                    <h3>{category.category}</h3>
                    {category.subcategories.map((subcategory) => (
                        <div key={subcategory.subcategory}>
                            <h4>{subcategory.subcategory}</h4>
                            <ul>
                                {filteredSkills(subcategory.skills).map((skill) => (
                                    <Skill key={skill.skill} skill={skill} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Skills;

*/

// import React from 'react';

// const skills = () => {
//     return (
//         <section id="skills">
//             <h2>Core Competencies:</h2>
//             <h3>Languages</h3>
//             <ul>
//                 <li>Python, C#, SQL, JavaScript, C++</li>
//             </ul>
//             <h3>Tools</h3>
//             <ul>
//                 <li>Pandas, Selenium, Flask, Django, ASP.NET, Vue, Scikit-learn, Docker, Excel,
//                     Jupyter, PowerBI, UIPath</li>
//             </ul>
//             <h3>Technical</h3>
//             <ul>
//                 <li>Design Patterns, Feature &amp; Test-Driven Development, Test Writing, Agile
//                     Development, CI/CD, Robotic Process Automation, REST, Data Modeling, Data Visualization,
//                     Data Analysis</li>
//             </ul>
//             <h3>Soft Skills</h3>
//             <ul>
//                 <li>Leadership, Conflict Resolution, Active Learning, Communication, Management
//                     Consulting, Performance Coaching, Crisis Management, Project Management, Resource
//                     Management, Personnel Management</li>
//             </ul>
//             <h3>Math</h3>
//             <ul>
//                 <li>Number &amp; Set Theory, Cryptography, Discrete Math, Probability, Statistics,
//                     Linear Algebra, Differential Equations, Vector Calculus</li>
//             </ul>
//         </section>
//     );
// };

// export default skills;
