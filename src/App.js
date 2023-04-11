import React, { useState } from 'react';
// import Objective from './components/Objective';
import Summary from './components/Content/Summary';
import Header from './components/Content/Header';
import Skills from './components/Content/Skills';
import Experience from './components/Content/Experience';
import AdditionalExperience from './components/Content/Additional_Experience';
import Education from './components/Content/Education';
import Projects from './components/Content/Projects';
import Certifications from './components/Content/Certifications';
import AboutMe from './components/Content/About';
import RoleSelector from './components/RoleSelector/RoleSelector';
// import RightSidebar from './components/RightSidebar';
import TableOfContents from './components/TableOfContents/TableOfContents';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/styles.css';



function App() {
  const [selectedRole, setSelectedRole] = useState('all');

  const handleRoleSelect = (roleValue) => {
    // Update the resume content based on the selected role
    console.log('Selected role:', roleValue);
    setSelectedRole(roleValue);
  };

  const headings = [
    { id: 'header', title: 'Contact' },
    // { id: 'objective', title: 'Objective' },
    { id: 'summary', title: 'Summary' },
    { id: 'skills', title: 'Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'projects', title: 'Projects' },
    { id: 'about', title: 'AboutMe' },
    // Add other headings here.
  ];

  return (
    <div className="App">
      <div className='Document'>
        {/* Left Sidebar with Table of Contents */}
        <Sidebar position="left">
          <TableOfContents headings={headings} />
        </Sidebar>
        <Header /><div class="section-demarcation"></div>
        {/* <RoleSelector onSelect={handleRoleSelect} /><div class="section-demarcation"></div> */}
        {/* <Objective /><div class="section-demarcation"></div> */}
        <Summary /><div class="section-demarcation"></div>
        <Skills selectedRole={selectedRole} /><div class="section-demarcation"></div>
        <Experience selectedRole={selectedRole} /><div class="section-demarcation"></div>
        <AdditionalExperience /><div class="section-demarcation"></div>
        <Education /><div class="section-demarcation"></div>
        <Certifications /><div class="section-demarcation"></div>
        <Projects /><div class="section-demarcation"></div>
        <AboutMe /><div class="section-demarcation"></div>

        {/* Right Sidebar with RoleSelector */}
        <Sidebar position="right">
          <RoleSelector onSelect={handleRoleSelect} />
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
