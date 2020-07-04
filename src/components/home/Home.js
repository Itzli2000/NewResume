import React, { useState } from 'react';
// Components
import NavBar from '../layout/NavBar';
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ContactSection from './../layout/ContactSection';
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
            <ContactSection />
        </div>
    );
};

export default Home;