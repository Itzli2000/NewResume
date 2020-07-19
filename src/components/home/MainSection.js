import React from 'react';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';

const MainSection = ({scrollTo}) => {

    const { t } = useTranslation();

    let strings = [
        t('STR_6'),
        t('STR_7'),
        t('STR_0')
    ];

    return (
        <div
            id="first"
            className="row full-section first"
        >
            <div className="main-section">
                <div className="badge badge-light animate__animated animate__fadeInUp">{t('STR_8')}</div>
                <h1 className="typer animate__animated animate__fadeInUp">
                    {t('STR_9')} &nbsp;
                    <Typed
                        strings={strings}
                        typeSpeed={70}
                        backSpeed={70}
                        loop
                    />
                </h1>
                <p className="description animate__animated animate__fadeInUp">{t('STR_10')}</p>
                <div className="scroll-down" onClick={()=>scrollTo('.second', 1000)}></div>
            </div>
        </div>
    );
};

export default MainSection;