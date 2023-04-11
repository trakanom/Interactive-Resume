import React from 'react';

const projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <div class="project">
                    <h3>Project 1</h3>
                    <p><strong>Company 1</strong> | <em>Duration 1</em></p>
                    <ul class="project-description">
                        <li>Responsibility or achievement 1</li>
                        <li>Responsibility or achievement 2</li>
                    </ul>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <p><strong>Company 2</strong> | <em>Duration 2</em></p>
                    <ul class="project-description">
                        <li>Responsibility or achievement 1</li>
                        <li>Responsibility or achievement 2</li>
                    </ul>
                </div>
            </ul>
        </section>
    );
};

export default projects;
