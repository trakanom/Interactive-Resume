//src/components/Content/Experience.js
import React, { useState, useEffect } from 'react';

const Responsibility = ({ responsibility }) => (
    <li className="responsibility-item">{responsibility.text || responsibility}</li>
);

const Accomplishment = ({ accomplishment }) => (
    <li className="accomplishment-item">{accomplishment.text || accomplishment}</li>
);

const Experience = ({ selectedRole }) => {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/data/experience.json');
            const data = await response.json();
            setExperienceData(data);
        };

        loadData();
    }, []);

    const filteredResponsibilities = (responsibilities) => {
        if (selectedRole === 'all') {
            return Array.isArray(responsibilities) ? responsibilities : [responsibilities];
        }

        if (Array.isArray(responsibilities)) {
            return responsibilities.filter((responsibility) => {
                const labels = responsibility.labels || [];
                return labels.includes(selectedRole);
            });
        } else {
            return [responsibilities];
        }
    };

    const filteredAccomplishments = (accomplishments) => {
        if (selectedRole === 'all') {
            return Array.isArray(accomplishments) ? accomplishments : [accomplishments];
        }

        if (Array.isArray(accomplishments)) {
            return accomplishments.filter((accomplishment) => {
                const labels = accomplishment.labels || [];
                return labels.includes(selectedRole);
            });
        } else {
            return [accomplishments];
        }
    };




    return (
        <section id="experience">
            <h2>Experience</h2>
            {experienceData.map((role, index) => (
                <div key={index}>
                    <h3>{role.title}</h3>
                    <h4>{role.subtitle}</h4>
                    <h5>Responsibilities</h5>
                    <ul className="responsibilities-list">
                        {filteredResponsibilities(role.responsibilities).map((responsibility, index) => (
                            <Responsibility key={index} responsibility={responsibility} />
                        ))}
                    </ul>
                    <h5>Accomplishments</h5>
                    <ul className="accomplishments-list">
                        {filteredAccomplishments(role.accomplishments).map((accomplishment, index) => (
                            <Accomplishment key={index} accomplishment={accomplishment} />
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;




// import React from 'react';
// import Role from './Role';
// import experienceData from '../../data/experienceData.json';

// const Experience = () => (
//     <section id="experience">
//         <h2>Experience</h2>
//         {experienceData.map((role, index) => (
//             <Role key={index} {...role} />
//         ))}
//     </section>
// );

// export default Experience;




// import React from 'react';

// const Experience = () => {
//     return (
        // <section id="experience">

        //     <h2>Experience</h2>
        //     <div class="role">
        //         <h3>Software Engineer / Technical Consultant</h3>
        //         <h4>Owner • 4d2 Solutions • 3/2020–Present • Remote</h4>
        //         <h5>Responsibilities:</h5><p>Expert in providing tailored software engineering and consultation services to clients in fintech,
        //             healthcare, gaming, and more. Utilized diverse programming languages, such as Python, C#, SQL, and
        //             Excel, to
        //             develop innovative solutions and automation optimizations, enhancing client performance and efficiency.
        //             Collaborated with clients to assess requirements and develop custom solutions that aligned with industry
        //             standards and best practices.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Algorithm Optimization - Improved Alchemix's Transmuter backend by reducing time complexity of
        //                 critical
        //                 functions, cutting customer fees by 25% and significantly increasing DAO's market valuation.</li>
        //             <li>Mathematical Proofing - Identified and addressed critical vulnerabilities through code auditing,
        //                 bolstered by mathematical proofs, contributing to the successful launch of ElasticDAO.</li>
        //             <li>Client Satisfaction - Maintained a high level of client satisfaction through effective
        //                 communication,
        //                 timely delivery, and quality-driven development, resulting in repeat business and referrals.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>
        //     <div class="role">
        //         <h3>Investment Strategy Manager</h3>
        //         <h4>Partner • Simple Securities LLC • 7/2020–3/2023 • Remote</h4>
        //         <h5>Responsibilities:</h5><p>Collaborated in a cross-functional team to drive profitability and growth for a bootstrapped trading
        //             firm,
        //             managing $10k to $500k across 13,000 trades in two years. Developed in-house Python tools for financial
        //             modeling and opportunity analysis, and mentored team members for personal growth and development.
        //             Utilized
        //             quantitative and qualitative analysis to identify market trends and optimize investment strategies.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Portfolio Growth - Grew the company's investment portfolio from $10k to $500k across 13,000 trades
        //                 in
        //                 two years through rigorous analysis and strategic decision-making.</li>
        //             <li>In-House Tool Development - Built Python tools for financial modeling and opportunity analysis,
        //                 laying
        //                 the groundwork for future role automation and increasing operational efficiency.</li>
        //             <li>Risk Management - Implemented risk management strategies to minimize exposure and maximize returns,
        //                 ensuring the company's sustained growth and profitability.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>
        //     <div class="role">
        //         <h3>Multi-Agent Systems Engineer</h3>
        //         <h4>Coleader • Thank Mr Skeltal • 3/2013–11/2017 • Remote</h4>
        //         <h5>Responsibilities:</h5><p>Co-founded a successful mercenary guild, providing software development and analytical services focused
        //             on
        //             optimization and automation. Utilized mathematical techniques, machine learning concepts, and
        //             industry-specific knowledge to enhance character configurations and create custom scripts using
        //             LavishScript
        //             tech stack. Offered personalized support to clients, ensuring seamless integration of systems and
        //             processes.
        //         </p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Top Performance - Attracted 40 clients through top 1% performance in optimization and automation
        //                 services.</li>
        //             <li>Advanced Script Development - Created advanced scripts and systems to enable small teams to manage
        //                 multiple characters and complete end-game content using intricate strategies and real-time
        //                 analytics.
        //             </li>
        //             <li>Client Engagement - Established strong relationships with clients, providing tailored support and
        //                 maintaining clear communication to ensure successful implementation and ongoing optimization of
        //                 custom
        //                 solutions.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>

        //     <div class="role">
        //         <h3>Practice Manager, Technology and Maintenance</h3>
        //         <h4>First Sierra Dental Care • 6/2013–4/2020 • Fresno, CA</h4>
        //         <h5>Responsibilities:</h5><p>Oversaw the execution of 200+ engineering and maintenance projects at First Sierra Dental Care, and
        //             managed a
        //             small team of technicians. Focused on infrastructure modernization, equipment design and repair, and
        //             technological integrations to improve overall practice operations. Employed industry-standard methods
        //             and
        //             procedures to ensure high-quality results.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Leadership Development - Fostered professional growth within a small team of maintenance technicians
        //                 by
        //                 providing leadership and guidance, leading to increased team efficiency and project success.</li>
        //             <li>Infrastructure Modernization - Executed infrastructure modernization projects, including energy
        //                 optimization initiatives that reduced environmental impact and operating costs, adhering to industry
        //                 best practices.</li>
        //             <li>COVID-19 Safety Measures - Spearheaded the creation of protective environments to minimize COVID-19
        //                 transmission, successfully preventing outbreaks through the design and implementation of negative
        //                 pressure rooms, exhaust systems, and disinfectant delivery mechanisms, following guidelines from
        //                 health
        //                 organizations.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>

        //     <div class="role">
        //         <h3>Facility Engineer / System Administrator</h3>
        //         <h4>First Sierra Dental Care • 12/2005–6/2013 • Fresno and Coarsegold, CA</h4>
        //         <h5>Responsibilities:</h5><p>Began as an apprentice and rapidly progressed into a facility engineering and system administration role,
        //             managing maintenance projects, overseeing direct reports, and providing 24/7 problem-solving support to
        //             ensure smooth operations and minimal downtime. Utilized industry-standard maintenance management systems
        //             and
        //             information technology tools to improve efficiency and reduce costs.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Rapid Growth - Demonstrated adaptability and strong learning capabilities, transitioning from
        //                 hands-on
        //                 tasks to managing maintenance projects and direct reports, becoming proficient in industry best
        //                 practices.</li>
        //             <li>Office Expansion - Spearheaded a 300 sq. ft. expansion at the Coarsegold location, executing
        //                 framing,
        //                 insulation, flooring, drywall, and electrical work with minimal assistance, creating added value for
        //                 the
        //                 practice and adhering to local building codes and regulations.</li>
        //             <li>Versatility - Showcased versatility by taking on personal assistant duties for the owner,
        //                 contributing
        //                 to the overall success of the business through effective multitasking and time management.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>
        //     <div class="role">
        //         <h3>Competitive Gamer, Strategy Development & Team Leader</h3>
        //         <h4>Everquest II (MMORPG) • 3/2005–11/2017 • Remote</h4>
        //         <h5>Responsibilities:</h5><p>Excelled in multiple high-ranked guilds, showcasing optimization and coordination expertise within the
        //             gaming
        //             industry. Successfully negotiated the merger of two struggling guilds and led the resulting guild to
        //             achieve
        //             server rank #2 in a senior leadership role. Utilized data-driven insights and industry-standard software
        //             tools to analyze and enhance team performance.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Strategic Leadership - Pioneered end-game strategies, leading teams through thousands of complex
        //                 challenges, and maintained a 95% lifetime raid attendance across 30,000 hours of playtime,
        //                 optimizing
        //                 group dynamics and resource allocation.</li>
        //             <li>Community Impact - Impacted game development and community optimization standards as a well-known
        //                 player, subject matter expert, and problem-solver, actively participating in forums and sharing best
        //                 practices.</li>
        //             <li>Data Analysis - Leveraged coordination and data analysis tools, such as combat logs and damage
        //                 meters,
        //                 to streamline team tactics development, fostering a reputation for excellence within the worldwide
        //                 community.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>
        //     <div class="role">
        //         <h3>NASA Swarmathon Competitor (3rd Place)</h3>
        //         <h4>Swarmathon Team (CSU Channel Islands) • 1/2017–5/2017 • Camarillo, CA</h4>
        //         <h5>Responsibilities:</h5><p>Contributed to space exploration technology by programming robots to achieve 3rd place out of 19 teams at
        //             the
        //             2017 competition. Developed robot search and retrieval algorithms in C++ using ROS (Robot Operating
        //             System)
        //             framework and supported the team through troubleshooting and collaboration.</p>
        //         <h5>Key Accomplishments:</h5>
        //         <ul class="key-accomplishments">
        //             <li>Competition Success - Achieved 3rd place against 19 teams at the 2017 NASA Swarmathon Robotics
        //                 Competition, contributing code toward Mars rover development and enhancing the efficiency of
        //                 resource
        //                 collection.</li>
        //             <li>Technical Expertise - Utilized multi-agent programming experience and strategic planning to enhance
        //                 robot search and retrieval algorithms, demonstrating strong problem-solving skills and optimizing
        //                 robot
        //                 swarm coordination.</li>
        //             <li>Team Support - Built and configured portable installations of Ubuntu to run test scenarios in
        //                 Gazebo, a
        //                 robotic simulator, providing crucial troubleshooting support for the team and ensuring seamless
        //                 integration of algorithms.</li>
        //         </ul>
        //     </div>
        //     <div class="visual-entry-demarcation"></div>
        // </section >

//     );
// };


// // import React, { useState, useEffect } from 'react';
// // import Role from './Role';

// // const Experience = () => {
// //     const [roles, setRoles] = useState([]);

// //     useEffect(() => {
// //         // Load your JSON data here
// //         const loadData = async () => {
// //             const response = await fetch('/src/data/Experience_00.json');
// //             const data = await response.json();
// //             setRoles(data);
// //         };

// //         loadData();
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Experience</h1>
// //             {roles.map((role, index) => (
// //                 <Role key={index} {...role} />
// //             ))}
// //         </div>
// //     );
// // };

// export default Experience;
