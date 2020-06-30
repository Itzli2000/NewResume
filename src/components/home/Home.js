import React from 'react';
import MainSection from './MainSection';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn" >
            <MainSection />
            <SecondSection />
        </div>
    );
};

export default Home;