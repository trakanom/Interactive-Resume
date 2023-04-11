import React from 'react';

const education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <ul>
                <div class="degree">
                    <h3>B.S. Math</h3>
                    <p><strong>California State University Channel Islands</strong> | <em>2016-2020</em></p>
                    <ul class="degree-description">
                        <li>CSUCI Swarmathon Team - NASA Swarmathon (3rd place)</li>
                    </ul>
                </div>
                <div class="degree">
                    <h3>A.S. Economics</h3>
                    <p><strong>Clovis Community College</strong> | <em>Duration 3</em></p>
                </div>
                <div class="degree">
                    <h3>A.S. Physics</h3>
                    <p><strong>Clovis Community College</strong> | <em>Duration 2</em></p>
                </div>
                <div class="degree">
                    <h3>A.S. Math</h3>
                    <p><strong>Cuesta Community College</strong> | <em>Duration 1</em></p>
                </div>
            </ul>
        </section>
    );
};

export default education;
