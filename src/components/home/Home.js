import React, { useState } from 'react';
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import NavBar from '../layout/NavBar';

const Home = (props) => {
    // console.log(props)

    const [section, setSection] = useState('');

    const scrollTo = (element) => {
        setSection(element);
        let el = document.getElementById(element);
        el.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="animate__animated animate__fadeIn" scrolledto={section}>
            <NavBar {...props} />
            <MainSection scrollTo={scrollTo} />
            <SecondSection />
        </div>
    );
};

export default Home;