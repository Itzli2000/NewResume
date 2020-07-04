import React from 'react';
import { useTranslation } from 'react-i18next';
// Helpers
import { calculate_age } from './../../helpers';
// Documents
import RESUME_EN from './../../assets/documents/ArielMolina-FrontendDeveloper.pdf';
import RESUME_ES from './../../assets/documents/ArielMolinaCV.pdf';

const SecondSection = () => {

    const { t, i18n } = useTranslation();

    const lang = i18n.language;
    const resumeUrl = lang === 'es' ? RESUME_ES : RESUME_EN;
    const birth = new Date(1988, 5, 28);

    return (
        <div id="second" className="row full-section second">
            <div className="container row">
                <div className="col-12 col-lg-6 text-center">
                    <img src="https://dummyimage.com/400x600/000/fff" alt="Ariel about" className="img-fluid"/>
                </div>
                <div className="col-12 col-lg-6 info-container">
                    <h2>{t('STR_12')}</h2>
                    <h3>{t('STR_13')}</h3>
                    <p>{t('STR_14')}</p>
                    <div className="info row">
                        <div className="col-12 col-md-6">
                            <p>{t('STR_15')} <span>{t('STR_15_1')}</span></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>{t('STR_16')} <span><a href={`tel:${t('STR_16_2')}`}>{t('STR_16_1')}</a></span></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>{t('STR_17')} <span>{calculate_age(birth)} {t('STR_17_1')}</span></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>{t('STR_18')} <span><a href={`mailto:${t('STR_18_1')}`}>{t('STR_18_1')}</a></span></p>
                        </div>
                    </div>
                    <a className="btn" href={resumeUrl} rel="noopener noreferrer" target="_blank">{t('STR_11')}</a>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;