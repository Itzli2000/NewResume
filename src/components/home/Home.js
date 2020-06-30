import React from 'react';
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import NavBar from '../layout/NavBar';

const Home = (props) => {
    // console.log(props)
    return (
        <div className="animate__animated animate__fadeIn" >
            <NavBar {...props} />
            <MainSection />
            <SecondSection />
        </div>
    );
};

export default Home;