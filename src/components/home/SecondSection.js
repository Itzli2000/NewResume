import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
// Images
import AVATAR from './../../assets/images/avatar.svg';
// Documents
import RESUME_EN from './../../assets/documents/ArielMolina-FrontendDeveloper.pdf';
import RESUME_ES from './../../assets/documents/ArielMolinaCV.pdf';

const SecondSection = () => {

    const { t, i18n } = useTranslation();

    const lang = i18n.language;
    const resumeUrl = lang === 'es' ? RESUME_ES : RESUME_EN;

    return (
        // <ReactSVG className="avatar" src={AVATAR} />
        <div id="second" className="row full-section second container mx-auto">
            <div className="col-12 col-md-6 text-center">
                <img src="https://dummyimage.com/400x600/000/fff" alt="Ariel about" />
            </div>
            <div className="col-12 col-md-6 info-container">
                <a className="btn" href={resumeUrl} rel="noopener noreferrer" target="_blank">Download</a>
            </div>
        </div>
    );
};

export default SecondSection;