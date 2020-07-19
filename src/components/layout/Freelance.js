import React from 'react';
// Hooks
import { useTranslation } from 'react-i18next';
// Validator
import freelanceAvailable from './../../constants/freelance.json';
// Helper
import { scrollPageTo } from './../../helpers';

const Freelance = () => {

    const { t } = useTranslation();
    const { available } = freelanceAvailable;

    if(!available) return null;

    return (
        <div className="row freelance">
            <div className="container">
                <div className="text-center info-container">
                    <h2>{t('FREELANCE_1')}</h2>
                    <h3>{t('FREELANCE_2')}</h3>
                    <p>{t('FREELANCE_3')}</p>
                    <button
                        onClick={() => scrollPageTo('.contatc', 1000)}
                        className="btn"
                    >
                        {t('FREELANCE_4')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Freelance;