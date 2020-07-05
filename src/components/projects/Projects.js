import React from 'react';
import NavBar from '../layout/NavBar';
// Components
import ProjectSecond from './ProjectSecond';
import ContactSection from '../layout/ContactSection';

const Projects = (props) => {
    return (
        <div className="top-section animate__animated animate__fadeIn" >
            <NavBar {...props} />
            <ProjectSecond />
            <ContactSection />
        </div>
    );
};

export default Projects;