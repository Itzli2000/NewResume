import React from 'react';
import { useTranslation } from 'react-i18next';
// Components
import ServiceCard from './../layout/ServiceCard';
// Services data
import servicedata from '../../constants/tech.json';

const ThirdSection = () => {

    const { t } = useTranslation();

    return (
        <div id="third" className="row full-section third">
            <div className="container">
                <div className="text-center info-container">
                    <h2>{t('STR_19')}</h2>
                    <h3>{t('STR_20')}</h3>
                    <p>{t('STR_21')}</p>
                </div>
                <div className="row">
                    {
                        servicedata ?
                            servicedata.map(service => (
                                <ServiceCard key={service.id} service={service} />
                            ))
                            : null
                    }
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;