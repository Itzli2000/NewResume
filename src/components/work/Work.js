import React from 'react';
import NavBar from '../layout/NavBar';
// Components
import WorkFirst from './WorkFirst';
import WorkSecond from './WorkSecond';
import ContactSection from './../layout/ContactSection';

const Work = (props) => {
    return (
        <div className="top-section animate__animated animate__fadeIn" >
            <NavBar {...props} />
            <WorkFirst />
            <WorkSecond />
            <ContactSection />
        </div>
    );
};

export default Work;