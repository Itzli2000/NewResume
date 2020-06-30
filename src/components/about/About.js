import React from 'react';
import NavBar from '../layout/NavBar';

const About = (props) => {
    return (
        <div>
            <NavBar {...props} />
            <p className="mt-5 pt-5 text-dark">desde about</p>
        </div>
    );
};

export default About;