import React from 'react';
import NavBar from '../layout/NavBar';

const Work = (props) => {
    return (
        <div>
            <NavBar {...props} />
            <p className="mt-5 pt-5 text-dark">desde work</p>
        </div>
    );
};

export default Work;