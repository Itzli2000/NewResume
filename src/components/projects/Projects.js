import React from 'react';
import NavBar from '../layout/NavBar';
// Components
import ProjectFirst from './ProjectFirst';
import ProjectSecond from './ProjectSecond';
import ContactSection from '../layout/ContactSection';
import Freelance from './../layout/Freelance';

const Projects = (props) => {
    return (
        <div className="top-section animate__animated animate__fadeIn" >
            <NavBar {...props} />
            <ProjectFirst />
            <ProjectSecond />
            <Freelance />
            <ContactSection />
        </div>
    );
};

export default Projects;