import React, { useState } from 'react';
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import NavBar from '../layout/NavBar';
// Helper
import { scrollPageTo } from './../../helpers';

const Home = (props) => {
    // console.log(props)

    const [section, setSection] = useState('');

    const scrollTo = (element, duration) => {
        setSection(element);
        scrollPageTo(element, duration);
    }

    return (
        <div className="animate__animated animate__fadeIn" scrolledto={section}>
            <NavBar {...props} />
            <MainSection scrollTo={scrollTo} />
            <SecondSection />
            <ThirdSection />
        </div>
    );
};

export default Home;