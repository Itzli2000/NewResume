import React from 'react';
import { ReactSVG } from 'react-svg';
// import { useTranslation } from 'react-i18next';
// Images
import AVATAR from './../../assets/images/avatar.svg';

const SecondSection = () => {

    // const { t } = useTranslation();

    return (
        <div id="second" className="row full-section second">
            <div>
            <ReactSVG className="avatar" src={AVATAR} />
            </div>
        </div>
    );
};

export default SecondSection;